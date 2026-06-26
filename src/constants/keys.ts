export const INDEX_KEYS = [
  { key: "a", display: "A" },
  { key: "ab", display: "A♯/B♭" },
  { key: "b", display: "B" },
  { key: "c", display: "C" },
  { key: "cd", display: "C♯/D♭" },
  { key: "d", display: "D" },
  { key: "de", display: "D♯/E♭" },
  { key: "e", display: "E" },
  { key: "f", display: "F" },
  { key: "fg", display: "F♯/G♭" },
  { key: "g", display: "G" },
  { key: "ga", display: "G♯/A♭" }
];

export const INDEX_CHORD = [
  { chord: "maj", display: "Major" },
  { chord: "min", display: "Minor" },
  { chord: "dim", display: "Dim" },
  { chord: "sev", display: "Dom 7" },
  { chord: "m7", display: "Min 7" },
  { chord: "maj7", display: "Maj 7" },
  { chord: "sus4", display: "Sus 4" },
  { chord: "sus2", display: "Sus 2" },
  { chord: "six", display: "Maj 6" },
  { chord: "dom9", display: "Dom 9" },
  { chord: "aug", display: "Aug" },
  { chord: "add9", display: "Add 9" },
  { chord: "sus4b", display: "7sus4" },
  { chord: "m9", display: "Min 9" },
  { chord: "maj9", display: "Maj 9" },
];

export const INDEX_MODES = [
  { value: "guitar", display: "GUITAR" },
  { value: "ukulele", display: "UKULELE" },
  { value: "custom", display: "CUSTOM" }
];

// Note - Chord - Text, chordNames, ChordNotes - Guitar, Uku
const KEYS: Record<string, any> = {
  // A
  a: {
    maj: {
      text: "A",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 2, finger: "3" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    min: {
      text: "Am",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 2, finger: "3" },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    sev: {
      text: "A7",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 0 },
          { string: 4, fret: 2, finger: "2" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    m7: {
      text: "Am7",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    maj7: {
      text: "Amaj7",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 2, finger: "3" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 1, finger: "2" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    sus4: {
      text: "Asus4",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 2, finger: "3" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    fiv: {
      text: "A5",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1", barre: 3 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "1" },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    six: {
      text: "A6",
      chordNames: [
        {
          key: "A",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1", barre: 5 }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "1", barre: 3 },
          { string: 1, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    sus2: {
      text: "Asus2",
      chordNames: [{ key: "A", sharp: false, flat: false, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "A9",
      chordNames: [{ key: "A", sharp: false, flat: false, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 4, finger: "4" },
          { string: 4, fret: 2, finger: "2" },
          { string: 5, fret: 3, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "Adim",
      chordNames: [{ key: "A", sharp: false, flat: false, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 2, finger: "3" },
          { string: 4, fret: 1, finger: "2" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "Aaug",
      chordNames: [{ key: "A", sharp: false, flat: false, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 3, finger: "4" },
          { string: 3, fret: 2, finger: "3" },
          { string: 4, fret: 2, finger: "2" },
          { string: 5, fret: 1, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 1 },
          { string: 2, fret: 1 },
          { string: 3, fret: 0 }
        ]
      }
    },
    add9: {
      text: "Aadd9",
      chordNames: [{ key: "A", sharp: false, flat: false, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 4, finger: "4" },
          { string: 4, fret: 2, finger: "3" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 1 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    sus4b: {
      text: "A7sus4",
      chordNames: [{ key: "A", sharp: false, flat: false, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 0, finger: "1", barre: 5 },
          { string: 2, fret: 2, finger: "3" },
          { string: 4, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    m9: {
      text: "Am9",
      chordNames: [{ key: "A", sharp: false, flat: false, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 5, finger: "1", barre: 5 },
          { string: 1, fret: 7, finger: "3" },
          { string: 5, fret: 7, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    maj9: {
      text: "Amaj9",
      chordNames: [{ key: "A", sharp: false, flat: false, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 5, finger: "1", barre: 5 },
          { string: 1, fret: 7, finger: "4" },
          { string: 2, fret: 6, finger: "2", barre: 1 },
          { string: 5, fret: 7, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
  },

  // A Sharp / B Flat
  ab: {
    maj: {
      text: "A♯/B♭",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "3", barre: 4 }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 1, finger: "1", barre: 3 }
        ]
      }
    },
    min: {
      text: "A♯/B♭m",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" },
          { string: 4, fret: 2, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 1, finger: "1", barre: 3 }
        ]
      }
    },
    sev: {
      text: "A♯/B♭7",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 4, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 3 },
          { string: 1, fret: 2, finger: "2" }
        ]
      }
    },
    m7: {
      text: "A♯/B♭m7",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 4, fret: 2, finger: "2" }
        ],
        ukulele: [{ string: 0, fret: 1, finger: "1", barre: 3 }]
      }
    },
    maj7: {
      text: "A♯/B♭maj7",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 0 }
        ]
      }
    },
    sus4: {
      text: "A♯/B♭sus4",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "3", barre: 3 },
          { string: 4, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 0 },
          { string: 2, fret: 1, finger: "1", barre: 3 }
        ]
      }
    },
    fiv: {
      text: "A♯/B♭5",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 0 },
          { string: 2, fret: 0, finger: "1", barre: 3 }
        ]
      }
    },
    six: {
      text: "A♯/B♭6",
      chordNames: [
        {
          key: "A",
          sharp: true,
          flat: false,
          aux: "6"
        },
        {
          key: "B",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "3", barre: 5 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 0, finger: "1", barre: 3 }
        ]
      }
    },
    sus2: {
      text: "A♯/B♭sus2",
      chordNames: [
        { key: "A", sharp: true, flat: false, aux: "" },
        { key: "B", sharp: false, flat: true, aux: "sus2" }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "A♯/B♭9",
      chordNames: [
        { key: "A", sharp: true, flat: false, aux: "" },
        { key: "B", sharp: false, flat: true, aux: "9" }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 3, finger: "2" },
          { string: 3, fret: 5, finger: "4" },
          { string: 4, fret: 3, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "A♯/B♭dim",
      chordNames: [{ key: "A", sharp: true, flat: false, aux: "" },
          { key: "B", sharp: false, flat: true, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1", barre: 4 },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 3, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "A♯/B♭aug",
      chordNames: [{ key: "B", sharp: false, flat: true, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1 },
          { string: 2, fret: 4, finger: "4" },
          { string: 3, fret: 3, finger: "3" },
          { string: 4, fret: 3, finger: "2" },
          { string: 5, fret: 2, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 3 },
          { string: 1, fret: 2 },
          { string: 2, fret: 2 },
          { string: 3, fret: 1 }
        ]
      }
    },
    add9: {
      text: "A♯/B♭add9",
      chordNames: [{ key: "B", sharp: false, flat: true, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1 },
          { string: 2, fret: 3, finger: "2" },
          { string: 3, fret: 5, finger: "4" },
          { string: 4, fret: 3, finger: "3" },
          { string: 5, fret: 1 }
        ],
        ukulele: [
          { string: 0, fret: 3 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
    sus4b: {
      text: "A♯/B♭7sus4",
      chordNames: [{ key: "B", sharp: false, flat: true, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 1, finger: "1", barre: 5 },
          { string: 2, fret: 3, finger: "3" },
          { string: 4, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 3 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
    m9: {
      text: "A♯/B♭m9",
      chordNames: [{ key: "B", sharp: false, flat: true, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 6, finger: "1", barre: 5 },
          { string: 1, fret: 8, finger: "3" },
          { string: 5, fret: 8, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
    maj9: {
      text: "A♯/B♭maj9",
      chordNames: [{ key: "B", sharp: false, flat: true, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 6, finger: "1", barre: 5 },
          { string: 1, fret: 8, finger: "4" },
          { string: 2, fret: 7, finger: "2", barre: 1 },
          { string: 5, fret: 8, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 0 }
        ]
      }
    },
  },

  // B
  b: {
    maj: {
      text: "B",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "3", barre: 4 }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "3" },
          { string: 1, fret: 3, finger: "2" },
          { string: 2, fret: 2, finger: "1", barre: 3 }
        ]
      }
    },
    min: {
      text: "Bm",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" },
          { string: 4, fret: 3, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "3" },
          { string: 1, fret: 2, finger: "1", barre: 3 }
        ]
      }
    },
    sev: {
      text: "B7",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 4, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "1", barre: 3 },
          { string: 1, fret: 3, finger: "2" }
        ]
      }
    },
    m7: {
      text: "Bm7",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 4, fret: 3, finger: "2" }
        ],
        ukulele: [{ string: 0, fret: 2, finger: "1", barre: 3 }]
      }
    },
    maj7: {
      text: "Bmaj7",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 3, finger: "2" },
          { string: 4, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "4" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 1, finger: "1" }
        ]
      }
    },
    sus4: {
      text: "Bsus4",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "3", barre: 3 },
          { string: 4, fret: 5, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "3" },
          { string: 1, fret: 4, finger: "2" },
          { string: 2, fret: 2, finger: "1", barre: 3 }
        ]
      }
    },
    fiv: {
      text: "B5",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 2, finger: "2" }
        ]
      }
    },
    six: {
      text: "B6",
      chordNames: [
        {
          key: "B",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "3", barre: 5 }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "4" },
          { string: 2, fret: 2, finger: "2" },
          { string: 4, fret: 2, finger: "3" }
        ]
      }
    },
    sus2: {
      text: "Bsus2sus2",
      chordNames: [{ key: "B", sharp: false, flat: false, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "B99",
      chordNames: [{ key: "B", sharp: false, flat: false, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 4, finger: "2" },
          { string: 3, fret: 6, finger: "4" },
          { string: 4, fret: 4, finger: "3" },
          { string: 5, fret: 5, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "Bdim",
      chordNames: [{ key: "B", sharp: false, flat: false, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 4 },
          { string: 2, fret: 3, finger: "2" },
          { string: 3, fret: 4, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "Baug",
      chordNames: [{ key: "B", sharp: false, flat: false, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2 },
          { string: 2, fret: 5, finger: "4" },
          { string: 3, fret: 4, finger: "3" },
          { string: 4, fret: 4, finger: "2" },
          { string: 5, fret: 3, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 3 },
          { string: 2, fret: 3 },
          { string: 3, fret: 2 }
        ]
      }
    },
    add9: {
      text: "Badd9",
      chordNames: [{ key: "B", sharp: false, flat: false, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2 },
          { string: 2, fret: 4, finger: "2" },
          { string: 3, fret: 6, finger: "4" },
          { string: 4, fret: 4, finger: "3" },
          { string: 5, fret: 2 }
        ],
        ukulele: [
          { string: 0, fret: 4 },
          { string: 1, fret: 1 },
          { string: 2, fret: 2 },
          { string: 3, fret: 2 }
        ]
      }
    },
    sus4b: {
      text: "B7sus4",
      chordNames: [{ key: "B", sharp: false, flat: false, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 2, finger: "1", barre: 5 },
          { string: 2, fret: 4, finger: "3" },
          { string: 4, fret: 5, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 4 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    m9: {
      text: "Bm9",
      chordNames: [{ key: "B", sharp: false, flat: false, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 7, finger: "1", barre: 5 },
          { string: 1, fret: 9, finger: "3" },
          { string: 5, fret: 9, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 1 },
          { string: 2, fret: 2 },
          { string: 3, fret: 0 }
        ]
      }
    },
    maj9: {
      text: "Bmaj9",
      chordNames: [{ key: "B", sharp: false, flat: false, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 7, finger: "1", barre: 5 },
          { string: 1, fret: 9, finger: "4" },
          { string: 2, fret: 8, finger: "2", barre: 1 },
          { string: 5, fret: 9, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3 },
          { string: 1, fret: 1 },
          { string: 2, fret: 2 },
          { string: 3, fret: 1 }
        ]
      }
    },
  },

  // C
  c: {
    maj: {
      text: "C",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 3, finger: "3" }
        ]
      }
    },
    min: {
      text: "Cm",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1", barre: 5 },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 5, finger: "4" },
          { string: 4, fret: 4, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 2, fret: 3, finger: "1", barre: 3 }
        ]
      }
    },
    sev: {
      text: "C7",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 3, finger: "4" },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 1, finger: "1" }
        ]
      }
    },
    m7: {
      text: "Cm7",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1", barre: 5 },
          { string: 2, fret: 5, finger: "3" },
          { string: 4, fret: 4, finger: "2" }
        ],
        ukulele: [{ string: 0, fret: 3, finger: "1", barre: 3 }]
      }
    },
    maj7: {
      text: "Cmaj7",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" }
        ]
      }
    },
    sus4: {
      text: "Csus4",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1", barre: 5 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 3, finger: "3" }
        ]
      }
    },
    fiv: {
      text: "C5",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1" },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 5, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 3, finger: "1", barre: 3 }
        ]
      }
    },
    six: {
      text: "C6",
      chordNames: [
        {
          key: "C",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1" },
          { string: 2, fret: 5, finger: "3", barre: 5 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    sus2: {
      text: "Csus2",
      chordNames: [{ key: "C", sharp: false, flat: false, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1", barre: 5 },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 5, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "C9",
      chordNames: [{ key: "C", sharp: false, flat: false, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1" },
          { string: 2, fret: 5, finger: "2" },
          { string: 3, fret: 7, finger: "4" },
          { string: 4, fret: 5, finger: "3" },
          { string: 5, fret: 6, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "Cdim",
      chordNames: [{ key: "C", sharp: false, flat: false, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1", barre: 4 },
          { string: 2, fret: 4, finger: "2" },
          { string: 3, fret: 5, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "Caug",
      chordNames: [{ key: "C", sharp: false, flat: false, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3 },
          { string: 2, fret: 6, finger: "4" },
          { string: 3, fret: 5, finger: "3" },
          { string: 4, fret: 5, finger: "2" },
          { string: 5, fret: 4, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 3 }
        ]
      }
    },
    add9: {
      text: "Cadd9",
      chordNames: [{ key: "C", sharp: false, flat: false, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 3, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 3 }
        ]
      }
    },
    sus4b: {
      text: "C7sus4",
      chordNames: [{ key: "C", sharp: false, flat: false, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 3, finger: "1", barre: 5 },
          { string: 2, fret: 5, finger: "3" },
          { string: 4, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
    m9: {
      text: "Cm9",
      chordNames: [{ key: "C", sharp: false, flat: false, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 8, finger: "1", barre: 5 },
          { string: 1, fret: 10, finger: "3" },
          { string: 5, fret: 10, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 3 },
          { string: 3, fret: 1 }
        ]
      }
    },
    maj9: {
      text: "Cmaj9",
      chordNames: [{ key: "C", sharp: false, flat: false, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 8, finger: "1", barre: 5 },
          { string: 1, fret: 10, finger: "4" },
          { string: 2, fret: 9, finger: "2", barre: 1 },
          { string: 5, fret: 10, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 2 }
        ]
      }
    },
  },

  // C Sharp / D Flat
  cd: {
    maj: {
      text: "C♯/D♭",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "3", barre: 4 }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 3 },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    min: {
      text: "C♯/D♭m",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 6, finger: "4" },
          { string: 4, fret: 5, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 1 },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 }
        ]
      }
    },
    sev: {
      text: "C♯/D♭7",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 4, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 2 },
          { string: 3, fret: 2, finger: "2" }
        ]
      }
    },
    m7: {
      text: "C♯/D♭m7",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 4, fret: 5, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 1, finger: "2" },
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "3" }
        ]
      }
    },
    maj7: {
      text: "C♯/D♭maj7",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 5, finger: "2" },
          { string: 4, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 2 },
          { string: 3, fret: 3, finger: "3" }
        ]
      }
    },
    sus4: {
      text: "C♯/D♭sus4",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "3", barre: 3 },
          { string: 4, fret: 7, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 1 },
          { string: 1, fret: 2, finger: "2" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    fiv: {
      text: "C♯/D♭5",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 1 },
          { string: 1, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    six: {
      text: "C♯/D♭6",
      chordNames: [
        {
          key: "C",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "D",
          sharp: false,
          flat: true,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "3", barre: 5 }
        ],
        ukulele: [{ string: 0, fret: 1, finger: "1", barre: 3 }]
      }
    },
    sus2: {
      text: "C♯/D♯sus2sus2",
      chordNames: [{ key: "C", sharp: true, flat: false, aux: "" },
          { key: "D", sharp: false, flat: true, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 6, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "C♯/D♯99",
      chordNames: [{ key: "C", sharp: true, flat: false, aux: "" },
          { key: "D", sharp: false, flat: true, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1" },
          { string: 2, fret: 6, finger: "2" },
          { string: 3, fret: 8, finger: "4" },
          { string: 4, fret: 6, finger: "3" },
          { string: 5, fret: 7, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "C♯/D♭dim",
      chordNames: [{ key: "C", sharp: true, flat: false, aux: "" },
          { key: "D", sharp: false, flat: true, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 4 },
          { string: 2, fret: 5, finger: "2" },
          { string: 3, fret: 6, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "C♯/D♭aug",
      chordNames: [{ key: "D", sharp: false, flat: true, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4 },
          { string: 2, fret: 7, finger: "4" },
          { string: 3, fret: 6, finger: "3" },
          { string: 4, fret: 6, finger: "2" },
          { string: 5, fret: 5, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 1 },
          { string: 2, fret: 1 },
          { string: 3, fret: 0 }
        ]
      }
    },
    add9: {
      text: "C♯/D♭add9",
      chordNames: [{ key: "D", sharp: false, flat: true, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 3, finger: "2" },
          { string: 3, fret: 1 },
          { string: 4, fret: 4, finger: "4" },
          { string: 5, fret: 1 }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 1 },
          { string: 3, fret: 4 }
        ]
      }
    },
    sus4b: {
      text: "C♯/D♭7sus4",
      chordNames: [{ key: "D", sharp: false, flat: true, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 4, finger: "1", barre: 5 },
          { string: 2, fret: 6, finger: "3" },
          { string: 4, fret: 7, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 2 },
          { string: 3, fret: 2 }
        ]
      }
    },
    m9: {
      text: "C♯/D♭m9",
      chordNames: [{ key: "D", sharp: false, flat: true, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 9, finger: "1", barre: 5 },
          { string: 1, fret: 11, finger: "3" },
          { string: 5, fret: 11, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 0 },
          { string: 3, fret: 2 }
        ]
      }
    },
    maj9: {
      text: "C♯/D♭maj9",
      chordNames: [{ key: "D", sharp: false, flat: true, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 9, finger: "1", barre: 5 },
          { string: 1, fret: 11, finger: "4" },
          { string: 2, fret: 10, finger: "2", barre: 1 },
          { string: 5, fret: 11, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 3 }
        ]
      }
    },
  },

  // D
  d: {
    maj: {
      text: "D",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 3, finger: "3" },
          { string: 5, fret: 2, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "1" },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 0 }
        ]
      }
    },
    min: {
      text: "Dm",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "3" },
          { string: 5, fret: 1, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 2, finger: "3" },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 0 }
        ]
      }
    },
    sev: {
      text: "D7",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 2, finger: "3" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "1", barre: 2 },
          { string: 3, fret: 3, finger: "2" }
        ]
      }
    },
    m7: {
      text: "Dm7",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 1, finger: "1", barre: 5 }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 2, finger: "3" },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    maj7: {
      text: "Dmaj7",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1", barre: 5 }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "1", barre: 2 },
          { string: 3, fret: 4, finger: "3" }
        ]
      }
    },
    sus4: {
      text: "Dsus4",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 3, finger: "3" },
          { string: 5, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 0 }
        ]
      }
    },
    fiv: {
      text: "D5",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 3, finger: "3" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 2, finger: "3" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    six: {
      text: "D6",
      chordNames: [
        {
          key: "D",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" },
          { string: 4, fret: 0 },
          { string: 5, fret: 2, finger: "2" }
        ],
        ukulele: [{ string: 0, fret: 2, finger: "1", barre: 3 }]
      }
    },
    sus2: {
      text: "Dsus2",
      chordNames: [{ key: "D", sharp: false, flat: false, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 5, finger: "1", barre: 5 },
          { string: 2, fret: 7, finger: "3" },
          { string: 3, fret: 7, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "D9",
      chordNames: [{ key: "D", sharp: false, flat: false, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 5, finger: "1" },
          { string: 2, fret: 7, finger: "2" },
          { string: 3, fret: 9, finger: "4" },
          { string: 4, fret: 7, finger: "3" },
          { string: 5, fret: 8, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "Ddim",
      chordNames: [{ key: "D", sharp: false, flat: false, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 5, finger: "1", barre: 4 },
          { string: 2, fret: 6, finger: "2" },
          { string: 3, fret: 7, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "Daug",
      chordNames: [{ key: "D", sharp: false, flat: false, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 5 },
          { string: 2, fret: 8, finger: "4" },
          { string: 3, fret: 7, finger: "3" },
          { string: 4, fret: 7, finger: "2" },
          { string: 5, fret: 6, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 3 },
          { string: 1, fret: 2 },
          { string: 2, fret: 2 },
          { string: 3, fret: 1 }
        ]
      }
    },
    add9: {
      text: "Dadd9",
      chordNames: [{ key: "D", sharp: false, flat: false, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 5, finger: "3" },
          { string: 2, fret: 4, finger: "2" },
          { string: 3, fret: 2 },
          { string: 4, fret: 5, finger: "4" },
          { string: 5, fret: 2 }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 2 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    sus4b: {
      text: "D7sus4",
      chordNames: [{ key: "D", sharp: false, flat: false, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 5, finger: "1", barre: 5 },
          { string: 2, fret: 7, finger: "3" },
          { string: 4, fret: 8, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 3 },
          { string: 3, fret: 0 }
        ]
      }
    },
    m9: {
      text: "Dm9",
      chordNames: [{ key: "D", sharp: false, flat: false, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 10, finger: "1", barre: 5 },
          { string: 1, fret: 12, finger: "3" },
          { string: 5, fret: 12, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    maj9: {
      text: "Dmaj9",
      chordNames: [{ key: "D", sharp: false, flat: false, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 10, finger: "1", barre: 5 },
          { string: 1, fret: 12, finger: "4" },
          { string: 2, fret: 11, finger: "2", barre: 1 },
          { string: 5, fret: 12, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 1 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
  },

  // D Sharp / E Flat
  de: {
    maj: {
      text: "D♯/E♭",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "3", barre: 4 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 3, finger: "2" },
          { string: 2, fret: 3, finger: "4" },
          { string: 3, fret: 1, finger: "1" }
        ]
      }
    },
    min: {
      text: "D♯/E♭m",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 3, fret: 8, finger: "4" },
          { string: 4, fret: 7, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 3, finger: "4" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 1, finger: "1" }
        ]
      }
    },
    sev: {
      text: "D♯/E♭7",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 4, fret: 8, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "1", barre: 2 },
          { string: 3, fret: 4, finger: "2" }
        ]
      }
    },
    m7: {
      text: "D♯/E♭m7",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 4, fret: 7, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "2" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    maj7: {
      text: "D♯/E♭maj7",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 3, fret: 7, finger: "2" },
          { string: 4, fret: 8, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "1", barre: 2 },
          { string: 3, fret: 5, finger: "3" }
        ]
      }
    },
    sus4: {
      text: "D♯/E♭sus4",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "3", barre: 3 },
          { string: 4, fret: 9, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 3 },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 4, finger: "4" }
        ]
      }
    },
    fiv: {
      text: "D♯/E♭5",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "3" },
          { string: 3, fret: 8, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "1", barre: 1 },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 5, finger: "4" }
        ]
      }
    },
    six: {
      text: "D♯/E♭6",
      chordNames: [
        {
          key: "D",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "E",
          sharp: false,
          flat: true,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "3", barre: 5 }
        ],
        ukulele: [{ string: 0, fret: 3, finger: "1", barre: 3 }]
      }
    },
    sus2: {
      text: "D♯/E♯sus2sus2",
      chordNames: [{ key: "D", sharp: true, flat: false, aux: "" },
          { key: "E", sharp: false, flat: true, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 3, fret: 8, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "D♯/E♯99",
      chordNames: [{ key: "D", sharp: true, flat: false, aux: "" },
          { key: "E", sharp: false, flat: true, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1" },
          { string: 2, fret: 8, finger: "2" },
          { string: 3, fret: 10, finger: "4" },
          { string: 4, fret: 8, finger: "3" },
          { string: 5, fret: 9, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "D♯/E♭dim",
      chordNames: [{ key: "D", sharp: true, flat: false, aux: "" },
          { key: "E", sharp: false, flat: true, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 4 },
          { string: 2, fret: 7, finger: "2" },
          { string: 3, fret: 8, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "D♯/E♭aug",
      chordNames: [{ key: "E", sharp: false, flat: true, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6 },
          { string: 2, fret: 9, finger: "4" },
          { string: 3, fret: 8, finger: "3" },
          { string: 4, fret: 8, finger: "2" },
          { string: 5, fret: 7, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 3 },
          { string: 2, fret: 3 },
          { string: 3, fret: 2 }
        ]
      }
    },
    add9: {
      text: "D♯/E♭add9",
      chordNames: [{ key: "E", sharp: false, flat: true, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: 5, finger: "2" },
          { string: 3, fret: 3 },
          { string: 4, fret: 6, finger: "4" },
          { string: 5, fret: 3 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 3 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
    sus4b: {
      text: "D♯/E♭7sus4",
      chordNames: [{ key: "E", sharp: false, flat: true, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 6, finger: "1", barre: 5 },
          { string: 2, fret: 8, finger: "3" },
          { string: 4, fret: 9, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 4 },
          { string: 3, fret: 1 }
        ]
      }
    },
    m9: {
      text: "D♯/E♭m9",
      chordNames: [{ key: "E", sharp: false, flat: true, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 11, finger: "1", barre: 5 },
          { string: 1, fret: 13, finger: "3" },
          { string: 5, fret: 13, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3 },
          { string: 1, fret: 1 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
    maj9: {
      text: "D♯/E♭maj9",
      chordNames: [{ key: "E", sharp: false, flat: true, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 11, finger: "1", barre: 5 },
          { string: 1, fret: 13, finger: "4" },
          { string: 2, fret: 12, finger: "2", barre: 1 },
          { string: 5, fret: 13, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
  },

  // E
  e: {
    maj: {
      text: "E",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 4, finger: "4" },
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" }
        ]
      }
    },
    min: {
      text: "Em",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 3, finger: "2" },
          { string: 3, fret: 2, finger: "1" }
        ]
      }
    },
    sev: {
      text: "E7",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 3, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "3" }
        ]
      }
    },
    m7: {
      text: "Em7",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 0 },
          { string: 4, fret: 3, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "3" }
        ]
      }
    },
    maj7: {
      text: "Emaj7",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 4, finger: "3", barre: 5 }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "2" }
        ]
      }
    },
    sus4: {
      text: "Esus4",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 2, finger: "4" },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "1" },
          { string: 1, fret: 4, finger: "2" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    fiv: {
      text: "E5",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1", barre: 2 }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "3" },
          { string: 1, fret: 4, finger: "4" },
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "1" }
        ]
      }
    },
    six: {
      text: "E6",
      chordNames: [
        {
          key: "E",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 1, finger: "1" },
          { string: 4, fret: 2, finger: "4" },
          { string: 5, fret: 0 }
        ],
        ukulele: [{ string: 0, fret: 4, finger: "1", barre: 3 }]
      }
    },
    sus2: {
      text: "Esus2sus2",
      chordNames: [{ key: "E", sharp: false, flat: false, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 7, finger: "1", barre: 5 },
          { string: 2, fret: 9, finger: "3" },
          { string: 3, fret: 9, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "E99",
      chordNames: [{ key: "E", sharp: false, flat: false, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 7, finger: "1" },
          { string: 2, fret: 9, finger: "2" },
          { string: 3, fret: 11, finger: "4" },
          { string: 4, fret: 9, finger: "3" },
          { string: 5, fret: 10, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "Edim",
      chordNames: [{ key: "E", sharp: false, flat: false, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 7, finger: "1", barre: 4 },
          { string: 2, fret: 8, finger: "2" },
          { string: 3, fret: 9, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "Eaug",
      chordNames: [{ key: "E", sharp: false, flat: false, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0 },
          { string: 1, fret: 3, finger: "4" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 1, finger: "2", barre: 1 },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 3 }
        ]
      }
    },
    add9: {
      text: "Eadd9",
      chordNames: [{ key: "E", sharp: false, flat: false, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 7, finger: "3" },
          { string: 2, fret: 6, finger: "2" },
          { string: 3, fret: 4 },
          { string: 4, fret: 7, finger: "4" },
          { string: 5, fret: 4 }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 4 },
          { string: 2, fret: 0 },
          { string: 3, fret: 2 }
        ]
      }
    },
    sus4b: {
      text: "E7sus4",
      chordNames: [{ key: "E", sharp: false, flat: false, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0, finger: "1", barre: 5 },
          { string: 1, fret: 2, finger: "2" },
          { string: 3, fret: 2, finger: "3" },
          { string: 4, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 2 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    m9: {
      text: "Em9",
      chordNames: [{ key: "E", sharp: false, flat: false, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0, finger: "1", barre: 5 },
          { string: 1, fret: 2, finger: "3" },
          { string: 5, fret: 2, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2 },
          { string: 2, fret: 0 },
          { string: 3, fret: 2 }
        ]
      }
    },
    maj9: {
      text: "Emaj9",
      chordNames: [{ key: "E", sharp: false, flat: false, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 0, finger: "1", barre: 5 },
          { string: 1, fret: 2, finger: "4" },
          { string: 2, fret: 1, finger: "2", barre: 1 },
          { string: 5, fret: 2, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 3 },
          { string: 2, fret: 0 },
          { string: 3, fret: 2 }
        ]
      }
    },
  },

  // F
  f: {
    maj: {
      text: "F",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 3, finger: "4" },
          { string: 3, fret: 2, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 0 },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 0 }
        ]
      }
    },
    min: {
      text: "Fm",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 0 },
          { string: 2, fret: 1, finger: "2" },
          { string: 3, fret: 3, finger: "4" }
        ]
      }
    },
    sev: {
      text: "F7",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 3, fret: 2, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 3, finger: "4" }
        ]
      }
    },
    m7: {
      text: "Fm7",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 3 },
          { string: 1, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    maj7: {
      text: "Fmaj7",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 2, finger: "4" },
          { string: 4, fret: 1, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "2" },
          { string: 1, fret: 6, finger: "4" },
          { string: 2, fret: 3, finger: "1" },
          { string: 3, fret: 5, finger: "3" }
        ]
      }
    },
    sus4: {
      text: "Fsus4",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "2" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 0 },
          { string: 2, fret: 1, finger: "1", barre: 3 }
        ]
      }
    },
    fiv: {
      text: "F5",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 3, finger: "3" }
        ]
      }
    },
    six: {
      text: "F6",
      chordNames: [
        {
          key: "F",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: null },
          { string: 3, fret: 2, finger: "2" },
          { string: 4, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 2, finger: "3" },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 3, finger: "4" }
        ]
      }
    },
    sus2: {
      text: "Fsus2",
      chordNames: [{ key: "F", sharp: false, flat: false, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 8, finger: "1", barre: 5 },
          { string: 2, fret: 10, finger: "3" },
          { string: 3, fret: 10, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "F9",
      chordNames: [{ key: "F", sharp: false, flat: false, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 8, finger: "1" },
          { string: 2, fret: 10, finger: "2" },
          { string: 3, fret: 12, finger: "4" },
          { string: 4, fret: 10, finger: "3" },
          { string: 5, fret: 11, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "Fdim",
      chordNames: [{ key: "F", sharp: false, flat: false, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 8, finger: "1", barre: 4 },
          { string: 2, fret: 9, finger: "2" },
          { string: 3, fret: 10, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "Faug",
      chordNames: [{ key: "F", sharp: false, flat: false, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1 },
          { string: 1, fret: 4, finger: "4" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 2, finger: "2", barre: 1 },
          { string: 5, fret: 1 }
        ],
        ukulele: [
          { string: 0, fret: 2 },
          { string: 1, fret: 1 },
          { string: 2, fret: 1 },
          { string: 3, fret: 0 }
        ]
      }
    },
    add9: {
      text: "Fadd9",
      chordNames: [{ key: "F", sharp: false, flat: false, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 8, finger: "3" },
          { string: 2, fret: 7, finger: "2" },
          { string: 3, fret: 5 },
          { string: 4, fret: 8, finger: "4" },
          { string: 5, fret: 5 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 0 }
        ]
      }
    },
    sus4b: {
      text: "F7sus4",
      chordNames: [{ key: "F", sharp: false, flat: false, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "2" },
          { string: 3, fret: 3, finger: "3" },
          { string: 4, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 3 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
    m9: {
      text: "Fm9",
      chordNames: [{ key: "F", sharp: false, flat: false, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "3" },
          { string: 5, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 3 }
        ]
      }
    },
    maj9: {
      text: "Fmaj9",
      chordNames: [{ key: "F", sharp: false, flat: false, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 1, finger: "1", barre: 5 },
          { string: 1, fret: 3, finger: "4" },
          { string: 2, fret: 2, finger: "2", barre: 1 },
          { string: 5, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
  },

  // F Sharp / G Flat
  fg: {
    maj: {
      text: "F♯/G♭",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 4, finger: "4" },
          { string: 3, fret: 3, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 1, finger: "1", barre: 3 },
          { string: 2, fret: 2, finger: "2" }
        ]
      }
    },
    min: {
      text: "F♯/G♭m",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "2" },
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 2, finger: "3" },
          { string: 3, fret: 0 }
        ]
      }
    },
    sev: {
      text: "F♯/G♭7",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 3, fret: 3, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "2" },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    m7: {
      text: "F♯/G♭m7",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" }
        ],
        ukulele: [
          { string: 0, fret: 2, finger: "1" },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    maj7: {
      text: "F♯/G♭maj7",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" },
          { string: 4, fret: 2, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "2" },
          { string: 1, fret: 4, finger: "4" },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 4, finger: "3" }
        ]
      }
    },
    sus4: {
      text: "F♯/G♭sus4",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "2" },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "4" },
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 2, finger: "3" }
        ]
      }
    },
    fiv: {
      text: "F♯/G♭5",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1" },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 1, finger: "1" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    six: {
      text: "F♯/G♭6",
      chordNames: [
        {
          key: "F",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "G",
          sharp: false,
          flat: true,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 2, fret: null },
          { string: 3, fret: 3, finger: "1" },
          { string: 4, fret: 4, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 3, finger: "2" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "1" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    sus2: {
      text: "F♯/G♯sus2sus2",
      chordNames: [{ key: "F", sharp: true, flat: false, aux: "" },
          { key: "G", sharp: false, flat: true, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 9, finger: "1", barre: 5 },
          { string: 2, fret: 11, finger: "3" },
          { string: 3, fret: 11, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "F♯/G♯99",
      chordNames: [{ key: "F", sharp: true, flat: false, aux: "" },
          { key: "G", sharp: false, flat: true, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 9, finger: "1" },
          { string: 2, fret: 11, finger: "2" },
          { string: 3, fret: 13, finger: "4" },
          { string: 4, fret: 11, finger: "3" },
          { string: 5, fret: 12, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "F♯/G♭dim",
      chordNames: [{ key: "F", sharp: true, flat: false, aux: "" },
          { key: "G", sharp: false, flat: true, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 9, finger: "1", barre: 4 },
          { string: 2, fret: 10, finger: "2" },
          { string: 3, fret: 11, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "F♯/G♭aug",
      chordNames: [{ key: "G", sharp: false, flat: true, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2 },
          { string: 1, fret: 5, finger: "4" },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 3, finger: "2", barre: 1 },
          { string: 5, fret: 2 }
        ],
        ukulele: [
          { string: 0, fret: 3 },
          { string: 1, fret: 2 },
          { string: 2, fret: 2 },
          { string: 3, fret: 1 }
        ]
      }
    },
    add9: {
      text: "F♯/G♭add9",
      chordNames: [{ key: "G", sharp: false, flat: true, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 9, finger: "3" },
          { string: 2, fret: 8, finger: "2" },
          { string: 3, fret: 6 },
          { string: 4, fret: 9, finger: "4" },
          { string: 5, fret: 6 }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 2 },
          { string: 3, fret: 1 }
        ]
      }
    },
    sus4b: {
      text: "F♯/G♭7sus4",
      chordNames: [{ key: "G", sharp: false, flat: true, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "2" },
          { string: 3, fret: 4, finger: "3" },
          { string: 4, fret: 5, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 4 },
          { string: 1, fret: 1 },
          { string: 2, fret: 0 },
          { string: 3, fret: 2 }
        ]
      }
    },
    m9: {
      text: "F♯/G♭m9",
      chordNames: [{ key: "G", sharp: false, flat: true, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "3" },
          { string: 5, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 }
        ]
      }
    },
    maj9: {
      text: "F♯/G♭maj9",
      chordNames: [{ key: "G", sharp: false, flat: true, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 2, finger: "1", barre: 5 },
          { string: 1, fret: 4, finger: "4" },
          { string: 2, fret: 3, finger: "2", barre: 1 },
          { string: 5, fret: 4, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 1 },
          { string: 3, fret: 1 }
        ]
      }
    },
  },

  // G
  g: {
    maj: {
      text: "G",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "2" },
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 3, finger: "3" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 2, finger: "2" }
        ]
      }
    },
    min: {
      text: "Gm",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1", barre: 5 },
          { string: 1, fret: 5, finger: "3" },
          { string: 2, fret: 5, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 3, finger: "3" },
          { string: 3, fret: 1, finger: "1" }
        ]
      }
    },
    sev: {
      text: "G7",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "3" },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 1, finger: "1" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 1, finger: "1" },
          { string: 3, fret: 2, finger: "3" }
        ]
      }
    },
    m7: {
      text: "Gm7",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1", barre: 5 },
          { string: 1, fret: 5, finger: "3" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "2" },
          { string: 2, fret: 1, finger: "1", barre: 3 }
        ]
      }
    },
    maj7: {
      text: "Gmaj7",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1" },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" },
          { string: 4, fret: 3, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1", barre: 3 }
        ]
      }
    },
    sus4: {
      text: "Gsus4",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "3" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 1, finger: "1" },
          { string: 5, fret: 3, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 3, finger: "2" },
          { string: 3, fret: 3, finger: "3" }
        ]
      }
    },
    fiv: {
      text: "G5",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1" },
          { string: 1, fret: 5, finger: "3" },
          { string: 2, fret: 5, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 3, finger: "2" },
          { string: 3, fret: 5, finger: "4" }
        ]
      }
    },
    six: {
      text: "G6",
      chordNames: [
        {
          key: "G",
          sharp: false,
          flat: false,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "3" },
          { string: 2, fret: 0 },
          { string: 3, fret: 0 },
          { string: 4, fret: 0 },
          { string: 5, fret: 0 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2, finger: "1" },
          { string: 2, fret: 0 },
          { string: 3, fret: 2, finger: "3" }
        ]
      }
    },
    sus2: {
      text: "Gsus2",
      chordNames: [{ key: "G", sharp: false, flat: false, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 10, finger: "1", barre: 5 },
          { string: 2, fret: 12, finger: "3" },
          { string: 3, fret: 12, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "G9",
      chordNames: [{ key: "G", sharp: false, flat: false, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 10, finger: "1" },
          { string: 2, fret: 12, finger: "2" },
          { string: 3, fret: 14, finger: "4" },
          { string: 4, fret: 12, finger: "3" },
          { string: 5, fret: 13, finger: "3" }
        ],
        ukulele: []
      }
    },
    dim: {
      text: "Gdim",
      chordNames: [{ key: "G", sharp: false, flat: false, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 10, finger: "1", barre: 4 },
          { string: 2, fret: 11, finger: "2" },
          { string: 3, fret: 12, finger: "3" }
        ],
        ukulele: []
      }
    },
    aug: {
      text: "Gaug",
      chordNames: [{ key: "G", sharp: false, flat: false, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3 },
          { string: 1, fret: 6, finger: "4" },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 4, finger: "2", barre: 1 },
          { string: 5, fret: 3 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 3 },
          { string: 2, fret: 3 },
          { string: 3, fret: 2 }
        ]
      }
    },
    add9: {
      text: "Gadd9",
      chordNames: [{ key: "G", sharp: false, flat: false, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 10, finger: "3" },
          { string: 2, fret: 9, finger: "2" },
          { string: 3, fret: 7 },
          { string: 4, fret: 10, finger: "4" },
          { string: 5, fret: 7 }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2 },
          { string: 2, fret: 3 },
          { string: 3, fret: 0 }
        ]
      }
    },
    sus4b: {
      text: "G7sus4",
      chordNames: [{ key: "G", sharp: false, flat: false, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1", barre: 5 },
          { string: 1, fret: 5, finger: "2" },
          { string: 3, fret: 5, finger: "3" },
          { string: 4, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 1 },
          { string: 3, fret: 3 }
        ]
      }
    },
    m9: {
      text: "Gm9",
      chordNames: [{ key: "G", sharp: false, flat: false, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1", barre: 5 },
          { string: 1, fret: 5, finger: "3" },
          { string: 5, fret: 5, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2 },
          { string: 2, fret: 1 },
          { string: 3, fret: 0 }
        ]
      }
    },
    maj9: {
      text: "Gmaj9",
      chordNames: [{ key: "G", sharp: false, flat: false, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 3, finger: "1", barre: 5 },
          { string: 1, fret: 5, finger: "4" },
          { string: 2, fret: 4, finger: "2", barre: 1 },
          { string: 5, fret: 5, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 2 },
          { string: 2, fret: 2 },
          { string: 3, fret: 0 }
        ]
      }
    },
  },

  // G Sharp / A Flat
  ga: {
    maj: {
      text: "G♯/A♭",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: ""
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: 6, finger: "4" },
          { string: 3, fret: 5, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 5, finger: "3" },
          { string: 1, fret: 3, finger: "1", barre: 3 },
          { string: 2, fret: 4, finger: "2" }
        ]
      }
    },
    min: {
      text: "G♯/A♭m",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "m"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 4, finger: "3" },
          { string: 1, fret: 3, finger: "2" },
          { string: 2, fret: 4, finger: "4" },
          { string: 3, fret: 2, finger: "1" }
        ]
      }
    },
    sev: {
      text: "G♯/A♭7",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 3, fret: 5, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 3, finger: "4" }
        ]
      }
    },
    m7: {
      text: "G♯/A♭m7",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "m7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 2, finger: "2" },
          { string: 3, fret: 3, finger: "4" }
        ]
      }
    },
    maj7: {
      text: "G♯/A♭maj7",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "maj7"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1" },
          { string: 2, fret: 5, finger: "3" },
          { string: 3, fret: 5, finger: "4" },
          { string: 4, fret: 4, finger: "2" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "3", barre: 3 }
        ]
      }
    },
    sus4: {
      text: "G♯/A♭sus4",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "sus4"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "2" },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "2" },
          { string: 2, fret: 4, finger: "3" },
          { string: 3, fret: 4, finger: "4" }
        ]
      }
    },
    fiv: {
      text: "G♯/A♭5",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "5"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1" },
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1" },
          { string: 1, fret: 3, finger: "3" },
          { string: 2, fret: 4, finger: "4" },
          { string: 3, fret: 0 }
        ]
      }
    },
    six: {
      text: "G♯/A♭6",
      chordNames: [
        {
          key: "G",
          sharp: true,
          flat: false,
          aux: ""
        },
        {
          key: "A",
          sharp: false,
          flat: true,
          aux: "6"
        }
      ],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 2, fret: null },
          { string: 3, fret: 5, finger: "2" },
          { string: 4, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1, finger: "1", barre: 3 },
          { string: 1, fret: 3, finger: "3" },
          { string: 3, fret: 3, finger: "4" }
        ]
      }
    },
    sus2: {
      text: "G♯/A♯sus2sus2",
      chordNames: [{ key: "G", sharp: true, flat: false, aux: "" },
          { key: "A", sharp: false, flat: true, aux: "sus2" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 11, finger: "1", barre: 5 },
          { string: 2, fret: 13, finger: "3" },
          { string: 3, fret: 13, finger: "4" }
        ],
        ukulele: []
      }
    },
    dom9: {
      text: "G♯/A♯99",
      chordNames: [{ key: "G", sharp: true, flat: false, aux: "" },
          { key: "A", sharp: false, flat: true, aux: "9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 11, finger: "1" },
          { string: 2, fret: 13, finger: "2" },
          { string: 3, fret: 15, finger: "4" },
          { string: 4, fret: 13, finger: "3" },
          { string: 5, fret: 14, finger: "3" }
        ],
        ukulele: []
      },
      aug: {
      text: "G♯/A♭aug",
      chordNames: [{ key: "A", sharp: false, flat: true, aux: "aug" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4 },
          { string: 1, fret: 7, finger: "4" },
          { string: 2, fret: 6, finger: "3" },
          { string: 3, fret: 5, finger: "2", barre: 1 },
          { string: 5, fret: 4 }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 0 },
          { string: 2, fret: 0 },
          { string: 3, fret: 3 }
        ]
      }
    },
    add9: {
      text: "G♯/A♭add9",
      chordNames: [{ key: "A", sharp: false, flat: true, aux: "add9" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 11, finger: "3" },
          { string: 2, fret: 10, finger: "2" },
          { string: 3, fret: 8 },
          { string: 4, fret: 11, finger: "4" },
          { string: 5, fret: 8 }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 0 },
          { string: 2, fret: 4 },
          { string: 3, fret: 1 }
        ]
      }
    },
    sus4b: {
      text: "G♯/A♭7sus4",
      chordNames: [{ key: "A", sharp: false, flat: true, aux: "7sus4" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "2" },
          { string: 3, fret: 6, finger: "3" },
          { string: 4, fret: 7, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 1 },
          { string: 2, fret: 2 },
          { string: 3, fret: 4 }
        ]
      }
    },
    m9: {
      text: "G♯/A♭m9",
      chordNames: [{ key: "A", sharp: false, flat: true, aux: "m9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "3" },
          { string: 5, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 1 },
          { string: 1, fret: 3 },
          { string: 2, fret: 2 },
          { string: 3, fret: 1 }
        ]
      }
    },
    maj9: {
      text: "G♯/A♭maj9",
      chordNames: [{ key: "A", sharp: false, flat: true, aux: "maj9" }],
      chordNotes: {
        guitar: [
          { string: 0, fret: 4, finger: "1", barre: 5 },
          { string: 1, fret: 6, finger: "4" },
          { string: 2, fret: 5, finger: "2", barre: 1 },
          { string: 5, fret: 6, finger: "4" }
        ],
        ukulele: [
          { string: 0, fret: 0 },
          { string: 1, fret: 0 },
          { string: 2, fret: 3 },
          { string: 3, fret: 1 }
        ]
      }
    },
  },
    dim: {
      text: "G♯/A♭dim",
      chordNames: [{ key: "G", sharp: true, flat: false, aux: "" },
          { key: "A", sharp: false, flat: true, aux: "dim" }],
      chordNotes: {
        guitar: [
          { string: 1, fret: 11, finger: "1", barre: 4 },
          { string: 2, fret: 12, finger: "2" },
          { string: 3, fret: 13, finger: "3" }
        ],
        ukulele: []
      }
    }
  }
};

export default KEYS;
