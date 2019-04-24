 export class StorageGlobal {

  public static store(key, value) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
  }

  public static load(key) {
    var str = localStorage.getItem(key)
    return (str)? JSON.parse(str) : null;
  }
}
