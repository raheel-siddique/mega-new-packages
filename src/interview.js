// life cycle methods
// 1)load
// 2)update
// 3)cleanup





// koi  bhi state ya prop update hoga to render method khud call hojata he
// 1)componendidmount: for api calling becasue it will run after renderign html
// 2)compientdidupdate:means after hcnaging any state

// how to pass data from child to parent
// 3 step
// make a function in parent and send to child 
// 2)accept that function an pass data as an argumnet in child copm
// 3)recieve data in parent as a parameter


// class k ander PureComponent component ki re-rendering se save rkhta he 


// useMemo hook application ki perfromance ko enhance krna like PureComponent
// kisi state k chnage pe fazool me koii function call horha ho to useMemo use krke us function pe dependecy deskte hen k jb ye chle bs jbhi chlna
// interview question
// function component k ander PureComponent bnaane k lye kia use krte hen??
// answer:useMemo

// ref
// react khta he k ref ko zada use na kro q k ye direct dom ko handle krta he jo k saii nh he react me state props se khlena chye
// is se input filed ki value change krskte hen get krskte hen color chnage krskte hen har wo xheez krskte hen jo dom hme deta he

// hooks ka name hamesha use se start hota he


// controll component and uncontroll comp
// means it talks about when we have a from or input field
// controll componet
// react me agar hm field ko state k through handle krte hen unhe khte hen contoll compo

// uncontroll componet
// measn directly dom k throught hndle hoti hen inpit fields means ref wghera



// higher order component(Hoc) 1 componet jo dosre component ko as an props letaa ho
// or return krta ho


// useParams() for getting /end point of url like id country etc which we need to send in backend for getting data
// useSearchParams()
// it takes 2 paramter 
// in first it can get query params
// in second it can send query params

// useLocation: can acess whole url means params,state,searchparams etc

// put vs patch
// PUT is a technique of altering resources when the client transmits 
// data that revamps the whole resource. PATCH is a technique for transforming 
// the resources when the client transmits partial data that will be updated without 
// changing the whole data.


// new interview questions
//  react is a librray
//  its used for fast speed cmpare to angular etc.
//  we should make component
//    react works on spa means single page application means its work like single page means you dont know page chabge bacuse it doesnt refresh

// state
// state is store data like variable 

// props
// we cant update props

// hooks
// useState for state managment
// useeffeact
// like lifecycle method 
// for using sideeffects


// what is jest 
// jest is a unit testing framework
// can we render components conditionally
// yes offcourse

// higher order function
// a function that takes a component as a parameter and also return output of that

// can we pass html content as a props
// yes 


// what is dumb component
//   stateless function componets


// automatic batching (react 18)
// if we update 4,5 compoent on single click so componet will be just render 1 time


// suspension first wehen websiete load first html, css then js data will come 
// so application should be hang how  to solve this..
// we can simply show some data or loader before fetching data



// useeffect vs usememo
// pore component ki faltu re-rendering ko rokta he useffect
// specific part ki faltu re-rendering ko rokta he usememo



// redux toolkit
// redux is a predictable state container for javscript apps
// its a state container 
// for global state Managment
// redux-toolkit
// is a library for efficient redux development


// three core concepts
// 1)store:that holds the state of your application
// 2)action:that describes what happend 
// in your application
// 3)reducer:that handle action and tell hwo to update state


// three principles
// 1) manage redux state in a single object 
// 2)to update the state of ur application you need to 
// let redux knwo about taht when action(means only allow to change state with dispacth)
// 3)to specify hwo the state tree is updated based on your actions, you write pure reducers



// start redux toolkit



