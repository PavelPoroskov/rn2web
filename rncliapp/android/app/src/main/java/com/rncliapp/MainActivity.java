package com.rncliapp;

import com.facebook.react.ReactActivity;
/*begin https://reactnavigation.org/docs/en/getting-started.html*/
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
/*end */

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rncliapp";
    }
    
/*begin https://reactnavigation.org/docs/en/getting-started.html*/
	@Override
	protected ReactActivityDelegate createReactActivityDelegate() {
		return new ReactActivityDelegate(this, getMainComponentName()) {
		  @Override
		  protected ReactRootView createRootView() {
		   return new RNGestureHandlerEnabledRootView(MainActivity.this);
		  }
		};
	}    
/*end */
}
