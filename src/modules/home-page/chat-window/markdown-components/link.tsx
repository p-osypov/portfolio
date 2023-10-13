const Link: React.FC<any> = (props) => {
  if (props.href?.startsWith('javascript:')) {
    return <span>{props.children}</span>;
  }
  return (
    <a href={props.href} target={'_blank'}>
      {props.children}
    </a>
  );
};
export default Link;
