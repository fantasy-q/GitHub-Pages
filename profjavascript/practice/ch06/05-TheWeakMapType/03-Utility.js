const alert = console.log.bind(console);

const wm = new WeakMap();
{
  class User {
    constructor(id) {
      this.idProperty = Symbol('id');
      this.setId(id);
    }

    setPrivate(property, value) {
      const privateMembers = wm.get(this) || {};
      privateMembers[property] = value;
      wm.set(this, privateMembers);
    }

    getPrivate(property) {
      return wm.get(this)[property];
    }

    setId(id) {
      this.setPrivate(this.idProperty, id);
    }

    getId() {
      return this.getPrivate(this.idProperty);
    }
  }

  const user = new User(123);
  alert(user.getId());  // 123
  user.setId(456);
  alert(user.getId());  // 456 

  // Demonstrating it's not really private
  alert(wm.get(user)[user.idProperty]);  // 456
}
console.log();

{
  // Closure
  const User = (() => {
    const wm = new WeakMap();

    class User {
      constructor(id) {
        this.idProperty = Symbol('id');
        this.setId(id);
      }

      setPrivate(property, value) {
        const privateMembers = wm.get(this) || {};
        privateMembers[property] = value;
        wm.set(this, privateMembers);
      }

      getPrivate(property) {
        return wm.get(this)[property];
      }

      setId(id) {
        this.setPrivate(this.idProperty, id);
      }

      getId(id) {
        return this.getPrivate(this.idProperty);
      }
    }
    return User;
  })();

  const user = new User(123);
  alert(user.getId());  // 123
  user.setId(456);
  alert(user.getId());  // 456 
}
{
  // 
  // const m = new Map();

  // const loginButton = document.querySelector('#login');

  // // Associates some metadata with the node
  // m.set(loginButton, { disabled: true });

}