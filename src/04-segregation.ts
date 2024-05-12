interface Bird {
  eat(): void;
  swim(): void;
}

interface FlyingBird {
  fly(): void;
}

interface SwimmingBird {
  swim(): void;
}

interface RunningBird {
  run(): void;
}

class Tucan implements FlyingBird, Bird {
  fly() {}
  eat() {}
  run() {}
  swim() {}
}

class Hummingbird implements FlyingBird, Bird {
  fly() {}
  eat() {}
  run() {}
  swim() {}
}

class Ostrich implements Bird, SwimmingBird, RunningBird {
  eat() {}
  run() {}
  swim() {}
}

class Penguin implements Bird, SwimmingBird {
  eat() {}
  run() {}
  swim() {}
}
