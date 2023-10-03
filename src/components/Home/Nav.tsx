import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Nav(props: any) {
  return (
    <nav>
      <input type="text" placeholder="Enter Anime Name..."
        value={props.search}
        onChange={e => props.setSearch((prev: any) => {
          prev.set("q", e.target.value)
          return prev
        }, { replace: true })}
        onSubmit={props.keypress}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </nav>
  )
}

