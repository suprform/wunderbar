<p align="center">
  <img src="https://github.com/suprform/wunderbar/raw/master/logo.png" width='200' />
</p>

# Welcome to Wunderbar!

Wunderbar is a design system that help in **making simple, intuitive** and **beautiful** experiences for users. At the core of Wunderbar we want to make it
**simple, robust, customizable** and an **accessible** library enabling you to **build** and **ship** features **faster better**.

<p align="center">
  <img
    src='https://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png'
    width='400'
  />
</p>

Wunderbar is build based on [**atomic-design**](https://bradfrost.com/blog/post/atomic-web-design/) and [**component-driven**](https://componentdriven.org) approaches.
Wunderbar's goal is to create atoms, molecules and to some degree organisms in UI, this would help you in creating templates/components and then pages.


![node](https://badgen.net/npm/node/@suprform/wunderbar)
![npm](https://badgen.net/npm/v/@suprform/wunderbar)
[![release](https://badgen.net/github/release/@suprform/wunderbar)](https://github.com/suprform/wunderbar/releases)
[![license](https://img.shields.io/badge/license-Apache-blue)](https://raw.githubusercontent.com/suprform/wunderbar/master/LICENSE.md)
[![size](https://badgen.net/bundlephobia/min/@suprform/wunderbar)](https://bundlephobia.com/package/@suprform/wunderbar@0.0.1)
[![size](https://badgen.net/bundlephobia/min/@suprform/wunderbar)](https://bundlephobia.com/package/@suprform/wunderbar@0.0.1)
[![dep](https://badgen.net/bundlephobia/dependency-count/@suprform/wunderbar)](https://bundlephobia.com/package/@suprform/wunderbar@0.0.1)
[![treeshaking](https://badgen.net/bundlephobia/tree-shaking/@suprform/wunderbar)](https://bundlephobia.com/package/@suprform/wunderbar@0.0.1)

## Installation

Wunderbar is available as an [npm package](https://www.npmjs.com/package/@suprform/wunderbar).

```sh
// with npm
npm install @suprform/wunderbar

// with yarn
yarn add @suprform/wunderbar
```

## Quick start

```sh
import React from 'react';
import Button from '@suprform/wunderbar'

const YourComponent = ({props}: propType) => {
  ...

  return(
    ...
    <Button>What's cooking?</Button>
    ...
  )
}

...

```

## Documentation

Check out our [documentation website(built on storybook)](https://suprform.github.io/wunderbar/).

## Why Wunderbar

Wunderbar is not just another UI kit / library our core focus is **Simplicity**, **Empathy**, **Modularity** and **Joy**

### Simplicity

The underlying foundation of Wunderbar is to make the experiences a lot simple as in making it less complex for both End Users and Consumers of Wunderbar.

### Empathy

Empathy is one of the factors we focus on deeply we build interfaces for all age groups and for people from all backgrounds.

### Modularity

Modularity is at the core of Wunderbar. Using Atomic Elements like mentioned above enables us to achive modularity we aim at building atoms and compose atoms to form the rest.

### Joy

What is all function without Joy, We want help build joyful experiences as our core belief is that users needs to find meaningful and emotionally relevant experience
which compounds.

## Methodology

We are built on **ReactJS** on **TypeScript** along with **[Emotion UI](https://emotion.sh/)**

We set out to make our components easy to use. Each of our components has a well-documented (and fully typed) public interface with strong, consistently-applied conventions. This way, developers don’t need to worry about the underlying implementation. Instead, they can focus on creating amazing experiences.

We ensure that our components are made for everyone. They are responsive to any screen or device. We also put a lot of effort into optimizing the performance of the components, so everyone can build inclusive experiences that work.

We make our components flexible enough to meet diverse needs. They present the information you pass in and give you smart callbacks when something has changed, but they don’t enforce any structure beyond that. No matter what type of experience you’re creating, you can use components as the building blocks of your product or feature.

## Changelog

If you have recently updated, please read the [changelog](https://github.com/suprform/wunderbar/releases) for details of what has changed.

## License

This project is licensed under the terms of the
[Apache-2.0 license](/LICENSE).
