import ListItem from "../../../common/ListItem"

function PSGlobalItems () {
  return (
    <div>
      <ListItem
        content={<span onClick={e => console.log(e) }>Nödstoppa alla PS</span>}
        shortCut="N"
      />
    </div>
  );
}

export default PSGlobalItems;
