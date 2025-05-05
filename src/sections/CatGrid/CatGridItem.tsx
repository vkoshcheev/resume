const CatGridItem = ({ gridArea, mp4src }: { gridArea: string; mp4src: string }) => {
  return (
    <div style={{ gridArea }}>
      <video autoPlay muted loop playsInline>
        <source src={mp4src} type="video/mp4" />
      </video>
    </div>
  );
};

export default CatGridItem;