package com.directory2;

import com.facebook.react.bridge.ReactContextBaseJavaModule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import android.os.SystemClock;

import java.util.Map;
import java.util.HashMap;

public class MyModule extends ReactContextBaseJavaModule {

  public MyModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  // Available as NativeModules.MyCustomModule.processString
  @ReactMethod
  public void processString(String input, Callback callback) {
      callback.invoke("Ciao Adriano " + input);
  }

  // Available as NativeModules.MyCustomModule.squareMe
  @ReactMethod
  public void squareMe(int input, Callback callback) {
      callback.invoke(null, input * input);
  }

  // Available as NativeModules.MyCustomModule.elapsedTimeSinceBoot
  @ReactMethod
  public void elapsedTimeSinceBoot(Callback callback) {
      long elapsedTime = SystemClock.elapsedRealtime();
      callback.invoke(null, (int) (long) elapsedTime);
  }

  @Override
  public String getName() {
    return "MyModule";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put("greeting", "Welcome to the DevDactic\n React Native (Android) Tutorial, right?!");
    return constants;
  }
}
