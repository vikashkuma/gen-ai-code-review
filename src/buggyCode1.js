// React – Subtle Performance Bug
// Problems

// Infinite re-render loop
// AI doesn’t understand state derivation
// Violates React mental model

function UserList({ users }) {
    const [filtered, setFiltered] = useState([]);
  
    useEffect(() => {
      const result = users.filter(u => u.active);
      setFiltered(result);
    }, [users, filtered]); // ❌ BUG
  
    return (
      <ul>
        {filtered.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    );
}
