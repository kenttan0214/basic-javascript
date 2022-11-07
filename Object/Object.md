### User Data
```
const users = [
  {
    id: 1,
    name: 'foo',
    isActive: false,
    isVerifed: false,
    sales: [],
  },
  {
    id: 2,
    name: 'bar',
    isActive: true,
    isVerifed: false,
    sales: [100, 101],
  },
  {
    id: 3,
    name: 'baz',
    isActive: false,
    isVerifed: false,
    sales: [10, 20, 33, 17],
  },
  {
    id: 4,
    name: 'bax',
    isActive: true,
    isVerifed: true,
    sales: [99, 188, 37],
  },
  {
    id: 5,
    name: 'qux',
    isActive: true,
    isVerifed: false,
    sales: [3, 1, 5, 1],
  },
  {
    id: 6,
    name: 'fred',
    isActive: true,
    isVerifed: true,
    sales: [],
  },
  {
    id: 7,
    name: 'thud',
    isActive: true,
    isVerifed: true,
    sales: [711, 198],
  },
  {
    id: 8,
    name: 'qux2',
    isActive: true,
    isVerifed: true,
    sales: [500, 20, 3],
  },
];

```
### Update the User list as per below requirements
- Sum total sales value
- Give additional 5% of sale value to the user who are active, verified and having more than 100 sales.
- Give additional 10% of sale value to the user who are active, verified and having more than 300 sales.
- Give additional 35% of sale value to the user who are active, verified and having more than 800 sales.
- Set user to inactive when they have zero sale value
- Set user to active when they have at least 1 sale value
- Sort the user list by sale value from higher to lower

### Based the the updated User list above
- Get a list of users who are active, verified and having at least 1 sale value
- Get a list of inactive users
