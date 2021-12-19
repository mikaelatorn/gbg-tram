type Props = {
  content: React.ReactNode,
  shortCut: string
}

function ListItem({content, shortCut}: Props) {
  return (
    <div className="list-item">
      <div className="main">{content}</div>
      <div className="left">{shortCut}</div>
    </div>
  );
}
export default ListItem;
