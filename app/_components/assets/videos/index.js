export default function videos() {
  return (
    <video
      src={`${process.env.BOX_SHARED_LINK}`}
      controls
      style={{ width: '100%', maxWidth: 800 }}
    />
  );
}