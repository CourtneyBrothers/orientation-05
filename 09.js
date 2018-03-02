#!/usr/bin/env node 

// const { Readable } = require('stream')
// const readStream =  Readable()
// readStream.push('foo ')
// readStream.push('bar\n')
// readStream.push(null)

// readStream.on('data', buffer => (
//     process.stdout.write(`Received chunk: ${JSON.stringify(buffer.toString())}\n`)
//   ))
//   readStream.on('end', () => process.stdout.write('End of stream\n'))

//   let i = 0

// readStream._read = () => {
//   if (i > 100) {
//     readStream.push(null) // when null is pushed to the stream, it emits an 'end' event
//   }
//   else {
//     readStream.push(`${i}`)  // have to make i a string. Streams only handle strings and buffers
//     i++
//   }
// }

//as above so below

// const { Readable } = require('stream')
// const readStream = Readable()
// readStream.push('foo ')
// readStream.push('bar\n')
// readStream.push(null)

// readStream.pipe(process.stdout)

// const { Readable, Writable } = require('stream')

// const readStream = Readable()
// readStream.push('foo ')
// readStream.push('bar\n')
// readStream.push(null)

// const writeStream = Writable()
// writeStream._write = (buffer, _, cb) => {
//   process.stdout.write(`${JSON.stringify(buffer.toString())}\n`)
//   cb()
// }

// readStream.pipe(writeStream)
//TODO ask joe
const { Readable, Transform } = require('stream')
const arg1 = process.argv[1];
const arg2 = process.argv[2];


const readStream = Readable()
readStream.push('foo ')
readStream.push('bar\n')
readStream.push(null)

const JSONStringify = Transform()
JSONStringify._transform = (buffer, _, cb) => {
  cb(null, `${JSON.stringify(buffer.toString())}\n`)
}

readStream.pipe(JSONStringify).pipe(process.stdout)