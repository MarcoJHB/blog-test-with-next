import CoverImage from './coverImage';

export default function PostHeader({ coverImage }) {
  return (
    <>
      <CoverImage url={coverImage.url} />
    </>
  );
}
