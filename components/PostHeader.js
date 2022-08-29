import CoverImage from './CoverImage';

export default function PostHeader({ coverImage }) {
  return (
    <>
      <CoverImage url={coverImage.url} />
    </>
  );
}
