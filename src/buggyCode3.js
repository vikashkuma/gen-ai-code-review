// USE CASE SET 3: Security – XSS via AI Code (VERY RELEVANT)

// XSS vulnerability
// AI assumes “trusted content”
// Real apps rarely have trusted content

function Comment({ text }) {
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
}
