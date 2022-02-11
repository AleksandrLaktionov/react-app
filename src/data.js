import { openDB, deleteDB } from 'idb';

export async function doDataBase(strDB, vers, objStore) {
  try {
    let db = await openDB(strDB, vers, {
      upgrade(db) {
        db.createObjectStore(objStore, { keyPath: 'id' })
      }
    })
    db.transaction(objStore, 'readwrite').objectStore(objStore)

    return db
  }
  catch (e) {
    console.error(e.name, e.message)
  }
}

export function deletDataBase(str) {
  try {
    deleteDB(str)
  }
  catch (e) {
    console.error(e.name, e.message)
  }
}

export async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Запрос не прошёл')
    const result = await response.json()
    return result
  }
  catch (e) {
    console.log('Ошибка:', e.message)
  }
}

export async function postData(url = '', body = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    if (!response.ok) throw new Error('Запрос не прошёл')
  }
  catch (e) {
    console.error('Ошибка:', e.message)
  }
}

export async function putData(url = '', body = {}) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    if (!response.ok) throw new Error('Запрос не прошёл')
  }
  catch (e) {
    console.log('Ошибка:', e.message)
  }
}

export async function deleteData(url = '') {
  try {
    await fetch(url, {
      method: 'DELETE'
    })
  }
  catch (e) {
    console.log('Ошибка:', e.message)
  }
}