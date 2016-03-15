
declare function seed_random(seed?: any, options?: seed_random.options): seed_random.rand;
declare namespace seed_random {
  export function resetGlobal(): void;

  interface rand {
    (): number;
  }

  interface options {
    entropy?: boolean;
    global?: boolean;
  }
}

export = seed_random;
