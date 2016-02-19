# ReactReduxShoppingCart

This is a Redux version of the CodeWinds University React Shopping
Cart Training Course (Jeff Barczewski http://codewinds.com/).

This is a significant refactor for this app, maintaining application
state through the Redux framework (a popular Flux implementation).

## App State

The app maintains a single persistant state, employing the Redux
pattern of Actions and Reducers.  In essance these are business
events, that drive our apps state transition.

??? describe the structure of src/state

The complete specification of our app state is documented
[here](src/state/README.md "Shopping Cart App State").

The app state is a Redux store, and is promoted through the
react-redux <Provider> component (see the bootstrap process in
src/browser.jsx).  This makes the app state available to any component
that ???.  This is a bit of majic, however under the covers it
utilizes the React Context feature.


## Simplified UI Components

The UI components were simplified, in the sense that the large set of
detailed parameters are now minimized.  In many cases component
parameters are completely eliminated.

Prior to this refactor, many components required a very large number
of parameters, communicating both data and behavioral callbacks.  It
was very much a top-down approach, where the top-level component was
all-knowing ... having intament knowledge of lower-level 
components.  In some cases, parameters had to be passed from the
top-level through the component chain, simply because it may be needed
by a grandchild component.

Where needed, a component is now divided into two seperate components
that work in conjunction with one another.

 - A controlling component, that is bound to the application state,
   and communicates both data and behavior to the presentation
   component (through parameters).

   A controller component "wraps" the presentation component, and can
   be roughply thought of as a type of Dependancy Injector.

   This is what Redux refers to as a containing component, because it
   contains a presentation component.

   Most behavioral aspects are related to state changes, and can be
   resolved at this level due to the well-designed event processors
   that transition state (Redux's dispatch() of actions).

   Typically, controlling components have very few parameters.  If they
   do it is at a higher-level of abstraction.

 - A presentation component, that is solely focused on layout and presentation.

   A presentation component defers behavioral aspects back to it's
   invoker (the controlling component).

   Presentation components are "wrapped" by a controlling components.

   Presentation components typically have a number of parameters.  The
   difference is, these paramaters are typically in a short DOM chain
   ... originating in the controlling component.
   
As an example of this, look at the CatalogCtrl component
(src/component/catalog-ctrl.jsx).  The CatalogCtrl "wraps" the Catalog
component (src/component/catalog.jsx) a presentation component.

 - CatalogCtrl:
   * wraps the Catalog (what Redux calls a container component)
   * takes minimal (or no) parameters
     - parameters at this level are higher-level controls
   * connects to the app state
     * transfering state to the wrapped Catalog (via properties)
     * driving business functionality that ultimatly causes our state to transition
       - by dispatching appropriate actions
 - Catalog:
   * is a "wrapped" component of Catalog (what Redux calls ??? Presentation Components).
   * it primary concern is presentation
   * accepting a number of parameters
     - both data - driving presentation content
     - and callback functions - driving state change

The characteritics of this Catalog example are repeated throughout our
app.


## Time Travel

Because our state is immutable, each transition can optionally be
monitored, providing things like undo/redo etc.  I would highly
recommend installing the Redux DevTools Chrome Extension (the app has
been tooled to automatically hook to this extension when present).
With this, you can monitor state transitions through the following
means:

- Log Monitor: showing each Action and the new resulting state
- Diff Monitor: showing each Action with a DIFF of the old/new state
- Slider Monitor: allowing you to move back and forth in time
- Chart Monitor: showing your state in a graphical tree

![Time Traveling with Redux](./doc/reduxTimeTravel.png "Time Traveling with Redux")

?? update to be the real image


## Conclusion

Within a React app, I would strongly suggest utilizing one of the Flux
utilities.  The most popular and well-documented Flux library is
Redux.

My experience here is that applying this framework not only simplified
the code, but it brought order to what otherwise could very quickly
turn into the "Wild Wild West".

I strongly dissagree with the mindset of "Don't use Flux till you need
it" ([Pete Hunt's React HowTo](https://github.com/petehunt/react-howto)).

Sure for "simple apps" it may be an overkill, but when was the last
time you wrote a "simple app"?  The shopping cart app is "pretty
simple" (as it is a training exercise), and yet in my estimation we
greatly benefited from this Redux injection!
