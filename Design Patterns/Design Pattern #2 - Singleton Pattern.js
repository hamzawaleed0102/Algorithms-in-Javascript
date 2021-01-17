// What is the Singleton design pattern?
// The Singleton pattern allows you to limit the number of instances of a particular object to one. This single instance is called the singleton.

// Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions.

const Singleton = (function () {
  function ProcessManager() {
    this.numProcess = 0;
  }

  let pManager;

  function createProcessMgr() {
    let pManager = new ProcessManager();
    return pManager;
  }

  function getProcessMgr() {
    if (pManager) {
      return pManager;
    } else {
      pManager = createProcessMgr();
      return pManager;
    }
  }
  return { getProcessMgr };
})();

const mgr = new Singleton.getProcessMgr();
const mgr2 = new Singleton.getProcessMgr();

console.log(mgr === mgr2); // true, because both variables refer to the SAME/Single instance of processManager
