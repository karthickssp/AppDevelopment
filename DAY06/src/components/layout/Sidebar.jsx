import '../../assets/styles/Sidebar.css'

function Sidebar() {
  return (
    <div>
      <>
        <ul>
          <li>
            <a href="#">
              <i className="ai-home" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ai-image" />
              <span>Images</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ai-file" />
              <span>Files</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ai-game-controller" />
              <span>Games</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ai-book-open" />
              <span>Books</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ai-bell" />
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ai-gear" />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ai-person" />
              <span>Profile</span>
            </a>
          </li>
        </ul>
      </>
    </div>
  )
}

export default Sidebar