import { fetchImages } from './flickr'
import { put, take, fork} from 'redux-saga/effects'

export function * loadImages() {
 const images = yield fetchImages()
 yield put({type: 'IMAGES_LOADED', images})
 yield put({type: 'IMAGE_SELECTED', image: images[0]})
}

export function* watchForLoadImages() {
  while(true) {
    yield take('LOAD_IMAGES');
    yield fork(loadImages);
  }
}
