export function Home() {
    return (
      <div className="p-2 flex flex-col items-start">
        <button onClick={() => window.location.href = 'testing/login'}>Login</button>
        <ul>
          <p>Tables</p>
          <li><button onClick={() => window.location.href = 'testing/login'}>Login</button></li>
          <li><button onClick={() => window.location.href = 'testing/login'}>Login</button></li>
        </ul>
        <button onClick={() => window.location.href = 'testing/sidebar'}>Sidebar</button>
      </div>
    )
  }