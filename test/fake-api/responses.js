module.exports =
  [
    { name: 'List Members', method: 'GET', test: '/members$', response: {"data": [
        { "type": "members", "id": "jaime", "attributes": { "name": "Jaime McCandless", "demNumber": "SR00218" } },
        { "type": "members", "id": "jason", "attributes": { "name": "Jason Curtis", "demNumber": "SR00213" } }
    ]}},
    { name: 'Member Detail - Jaime', method: 'GET', test: '/members/jaime$', response: {"data": {
       id: 'jaime', type: 'members', attributes: { name: "Jaime McCandless", demNumber: "SR00218" } }
    }}
  ]