package cc.enes_online.vertretungsplanapp.handrup;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import android.view.WindowManager;
import android.os.Build;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "vertretungsplanApp";
    }

      @Override
      protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
          @Override
          protected ReactRootView createRootView() {
           return new RNGestureHandlerEnabledRootView(MainActivity.this);
          }
        };
      }

      @Override
      protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, true);

/*
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams();
            layoutParams.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            getWindow().setAttributes(layoutParams);
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
*/
        super.onCreate(savedInstanceState);
    }
}
