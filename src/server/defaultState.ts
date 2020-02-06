interface Insect {
  description: string,
  name: string,
  pest: boolean | null,
  scientificName: string,
  links: Array<Link>,
}

interface Plant {
  description: string,
  name: string,
  scientificName: string,
  links: Array<Link>,
}

interface Zone {
  description: string,
  name: string,
}

interface Link {
  wikipedia: string,
}

export interface DefaultState {
  insects: Array<Insect>,
  plants: Array<Plant>,
  zones: Array<Zone>,
}

export const defaultState = {
  insects: [
    {
      description: "",
      name: "Japanese beetle",
      pest: true,
      scientificName: "Popillia japonica",
      links: [
        { wikipedia: "https://en.wikipedia.org/wiki/Japanese_beetle" },
      ],
    }
  ],
  plants: [
    {
      description: "",
      name: "plant",
      scientificName: "plantifica plantiatia",
      links: [
        { wikipedia: "https://en.wikipedia.org/wiki/Japanese_beetle" },
      ],
    }
  ],
  zones: [
    {
      description: "",
      name: "Zone 1",
      
    }
  ],
};
