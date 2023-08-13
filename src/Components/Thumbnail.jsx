function Thumbnail(props) {
  // eslint-disable-next-line react/prop-types
  const { id, className, thumbnailSrc, handleThumbnailClicked } = props;
  return (
    <img
      src={thumbnailSrc}
      className={`thumbnail ${className}`}
      onClick={() => {
        handleThumbnailClicked(id);
      }}
    />
  );
}

export default Thumbnail;
