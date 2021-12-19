import { SyntheticEvent, useEffect, useState } from "react";
import ListItem from "../../common/ListItem"
import { requestBegar, requestDrift, requestTogglePS, openMenu } from "../../scripts/PSLogic";

type Props = {
  title: string,
  shortcut: string,
  parentId: string,
  id: string
}

function SettingsMenu({title, shortcut, parentId, id}: Props) {
  const [state, setState] = useState({
    stop: true,
    begar: true,
    drift: true
  })

  useEffect (() => {
    document.getElementById(parentId).addEventListener("click", () => {
      openMenu(id)
    });
  });

  function toggleMenuItems (event: SyntheticEvent, type: string, isActive: boolean) {
    const id = (event.target as HTMLInputElement).id
    updateState(type, isActive)
    if (type === 'stop') {
      requestTogglePS(id, isActive)
    } else if (type === 'begar') {
      requestBegar(id, isActive)
    } else {
      requestDrift(id, isActive)
    }
  }

  function updateState (key: string, isActive: boolean) {
    setState(prevState => {
      return { ...prevState, [key]: isActive }
    })
  }

  let stopListItem;
  let begarListItem;
  let driftListItem;

  if (state.stop) {
    stopListItem = ( <div className="ps-item" id={title} onClick={e => toggleMenuItems(e, 'stop', false)}>
      <ListItem
        content={<span>Stoppställ PS</span>}
        shortCut={'(S)'}
      />
    </div> )
  } else {
    stopListItem = ( <div className="ps-item" id={title} onClick={e => toggleMenuItems(e, 'stop', true)}>
      <ListItem
        content={<span>Återställ stoppställd PS</span>}
        shortCut={'(R)'}
      />
    </div> )
  }

  if (state.begar) {
    begarListItem = ( <div className="ps-item" id={title} onClick={e => toggleMenuItems(e, 'begar', false)}>
      <ListItem
        content={<span>Begär tågväg</span>}
        shortCut={'(T)'}
      />
    </div> )
  } else {
    begarListItem = ( <div className="ps-item" id={title} onClick={e => toggleMenuItems(e, 'begar', true)}>
      <ListItem
        content={<span>Återtag tågvägsbegäran</span>}
        shortCut={'(Å)'}
      />
    </div> )
  }

  if (state.drift) {
    driftListItem = ( <div className="ps-item" id={title} onClick={e => toggleMenuItems(e, 'drift', false)}>
      <ListItem
        content={<span>Tag PS ur bruk</span>}
        shortCut={'(X)'}
      />
    </div> )
  } else {
    driftListItem = ( <div className="ps-item" id={title} onClick={e => toggleMenuItems(e, 'drift', true)}>
      <ListItem
        content={<span>Sätt PS i drift</span>}
        shortCut={'(D)'}
      />
    </div> )
  }

  return (
    <div className="ps-container">
      <div id={id} className="ps-menu">
        <div className="ps-title">
          <ListItem
            content={<span>{title}</span>}
            shortCut={'(' + shortcut + ')'}
          />
        </div>
        {stopListItem}
        {begarListItem}
        {driftListItem}
      </div>
    </div>
  );
}

export default SettingsMenu;