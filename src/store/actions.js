import * as types from './mutation-types'

export default {
  getTest ({
    commit
  }) {
    commit(types[types.TEST])
  }
}
