import React from 'react'
import logo from './logo.svg'
import './App.css'
class Hello {
  private _name: string
  private _age: number
  constructor() {
    this._name = 'a'
    this._age = 1
  }
  get name(): string {
    return this._name
  }
  set name(value: string) {
    this._name = value
  }
  get age(): number {
    return this._age
  }
  set age(age: number) {
    if (age > 0 && age < 100) {
      console.log('年龄在0-100之间') // 年龄在0-100之间
      return
    }
    this._age = age
  }
}

let hello = new Hello()
hello.name = 'muyy'
hello.age = 23
console.log(hello.name) // muyy

function App() {
  interface SearchFunc {
    (source: string, subString: string): boolean
  }

  let mySearch: SearchFunc
  mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1
  }
  return <div>abc</div>
}

export default App
