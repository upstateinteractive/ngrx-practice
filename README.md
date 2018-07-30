# ngrx practice

## running
#### Install
```sh
npm install #install project dependencies
npm i -g json-server #install json-server globally
```

#### Run
```sh
npm start
```

## Practice One
### Objectives
1. Actions
- [ ] create the actions necessary to initiate a GET request, respond to a completed GET request, and respond to an errored GET request (total: 3 actions)
- [ ] create the action necessary to select a fighter (total: 1 action)
- [ ] create the necessary effect to map the response of the GET action to the GET_COMPLETE and GET_ERROR actions appropriately (total: 1 effect)

2. Store
- [ ] dispatch a GET action in ngOnInit
- [ ] dispatch a select action when selecting a fighter

3. Reducers
- [ ] create a case to add all of the response items to state on a successful GET request using ngrx/Entity
- [ ] create a case to add the selectedId of a single item to state

4. State
- [ ] create selectors for selecting 1 fighter from the state and all of the fighters from the state

5. UI
- [ ] create a list of fighters names
- [ ] create a card with fighters details
- [ ] make each item on the list clickable and able to select a fighter
- [ ] make the card display the details of the selected fighter
