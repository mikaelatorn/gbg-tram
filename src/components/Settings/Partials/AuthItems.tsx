import ListItem from "../../../common/ListItem"

function AuthItems () {
  return (
    <div>
      <ListItem
        content={<span onClick={e => console.log(e) }>Logga ut</span>}
        shortCut="L"
      />
    </div>
  );
}

export default AuthItems;
