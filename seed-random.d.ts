

interface seed_random {
  (seed?: any, options?: seed_random_options): rand;
  resetGlobal(): void;
}

interface rand {
  (): number;
}

interface seed_random_options {
  entropy?: boolean;
  global?: boolean;
}

export = seed_random;
