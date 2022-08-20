import CoverImage from '../components/CoverImage';

export default function PostHeader({ coverImage }) {
  return (
    <>
      <CoverImage url={coverImage.url} />
    </>
  );
}
