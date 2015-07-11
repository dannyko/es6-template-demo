export default function table(addrs) {
    return $tmpl.html(`
        <table>
        ${
          addrs.map(
            addr => $tmpl.html(`
            <tr>$${addr.first}</tr>
            <tr>$${addr.last}</tr>
            `)
          ).join("")
        }
        </table>
    `);
} ;