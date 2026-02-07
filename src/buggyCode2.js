// USE CASE SET 2: Async + Race Condition

// Race condition when id changes fast
// Memory leak
// Stale responses overwrite newer ones

async function loadUser(userId) {
    const res = await fetch(`/api/user/${userId}`);
    return res.json();
}
  
useEffect(() => {
    loadUser(id).then(setUser);
}, [id]);
  