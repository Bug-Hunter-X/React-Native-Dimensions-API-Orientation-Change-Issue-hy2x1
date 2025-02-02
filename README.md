# React Native Dimensions API Orientation Change Issue

This repository demonstrates a common issue in React Native where the `Dimensions` API doesn't update correctly when the device orientation changes. This can lead to layout problems, particularly when your app relies on screen width or height for calculations.

The `DimensionsBug.js` file shows the buggy implementation. `DimensionsBugSolution.js` provides a solution using `Dimensions.addEventListener` to listen for orientation changes and update the dimensions accordingly.