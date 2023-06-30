export default function IconLink({ href }) {
  return (
    <>
      <a href={href}></a>
    </>
  );
}
IconLink.propTypes = {
  href: "string",
};
