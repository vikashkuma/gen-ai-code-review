/***************************************************************
 * UserList Component
 * Renders a list of active users.
 * Efficiently filters users using useMemo.
 ****************************************************************/

import React, { useMemo } from 'react';

/**
 * Renders a list of active users.
 * @param {Object} props
 * @param {Array<{id: number, name: string, active: boolean}>} props.users - List of user objects.
 * @returns {JSX.Element}
 */
function UserList({ users }) {
  const filtered = useMemo(
    () => users.filter(u => u.active),
    [users]
  );

  return (
    <ul>
      {filtered.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
