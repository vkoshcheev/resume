import { debounce, isEqual } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import { sleep, useComponentDidUpdate } from 'utils-react';
import './SkillsList.scss';
import SkillSetItem from './components/SkillSetItem';
import { searchSkill } from './searchSkill';
import { skillSets, skillsWithSynonyms } from './skills';

const SkillsList = () => {
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const [searchString, setSearchString] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);


  const [resultsHeight, setResultsHeight] = useState('0px');
  const [defaultSkillListHeight, setDefaultSkillListHeight] = useState('auto');

  const resetSearchString = () => {
    setSearchString('');
  };

  const transitionTime = 1000;
  const getSearchResults = useCallback(
    async (searchInput: string) => {
      let newSearchResults: string[] = [];
      if (searchInput) {
        newSearchResults = searchSkill(searchInput, skillsWithSynonyms);
        if (isEqual(newSearchResults, searchResults) && showSearchResults) return;
      }

      await transitionOpacity(0);
  
      if (!searchInput) {
        setShowSearchResults(false);
        setResultsHeight(defaultSkillListHeight);
      } else {
        setSearchResults(newSearchResults);
        setShowSearchResults(true);

        // line-height multiplied by amount of lines
        if (newSearchResults.length) {
          setResultsHeight(`${25 * newSearchResults.length}px`);
        } else {
          setResultsHeight(`175px`);
        }
      }

      await transitionOpacity(1);
    },
    [searchResults, showSearchResults, searchResultsRef.current],
  );
  
  const getSearchResultsDebounce = useCallback(debounce(getSearchResults, 500, { trailing: true }), [
    getSearchResults,
  ]);

  const transitionOpacity = async (targetOpacity: number) => {
    searchResultsRef.current!.style.opacity = targetOpacity.toString();
    await sleep(transitionTime);
  };

  // ################################################################################################
  // ################################################################################################

  useComponentDidUpdate(() => {
    getSearchResultsDebounce(searchString);
  }, [searchString]);

  useEffect(() => {
    if (searchResultsRef.current?.scrollHeight) {
      const height = `${searchResultsRef.current?.scrollHeight}px`;
      setDefaultSkillListHeight(height);
      setResultsHeight(height);
    }
  }, [searchResultsRef.current]);

  // ################################################################################################
  // ################################################################################################
  return (
    <div className="section">
      <div className="section__title">Навыки</div>

      <div className="skills-list__search-container">
        <input
          placeholder="Поиск по навыкам"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          type={'search'}
          // maxLength={30}
          className="skills-list__search-container__search-field"
        />

        <button className="skills-list__search-container__search-reset-button" onClick={resetSearchString}>
          ✖
        </button>
      </div>

      <div
        ref={searchResultsRef}
        className="skills-list__items__search-results-container"
        style={{ height: resultsHeight }}
      >
        {showSearchResults ? (
          !searchResults.length ? (
            <div className="skills-list__items__search-results-empty">
              Навык не найден ¯\_(ツ)_/¯
              <br />
              <br />
              Видимо, я им не владею, или же в строке поиска что-то не то.
              <br />
              {'Можно проверить '}
              <button
                className="skills-list__items__search-results-empty__reset-results-button"
                onClick={resetSearchString}
              >
                полный список
              </button>
              .
              <br />
              <br />Я положительно отношусь к получению новых навыков, и если искомого навыка нет в списке -
              я готов его освоить, если это необходимо.
            </div>
          ) : (
            searchResults.map((searchResult) => {
              const checkMark = '✔ ';
              const text = checkMark.concat(searchResult);
              return <div key={searchResult} className="skills-list__items__search-result">{text}</div>;
            })
          )
        ) : (
          <div className="skills-list__items">
            {skillSets.map((skillSet) => 
              <SkillSetItem key={skillSet.skillSetName} skillSet={skillSet}/>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsList;
