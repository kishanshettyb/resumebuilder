export interface CoverLetter {
  title: string;
  href: string;
  description: string;
}

export interface Resume {
  title: string;
  href: string;
  description: string;
}

export function getCoverLetter(): CoverLetter[] {
  return [
    {
      title: 'Simple',
      href: '../coverletter/',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Professional',
      href: '../coverletter#professional',
      description: 'For sighted users to preview content available behind a link.'
    },
    {
      title: 'Modren',
      href: '../coverletter#modren',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
    },
    {
      title: 'Creative',
      href: '../coverletter#creative',
      description: 'Visually or semantically separates content.'
    }
  ];
}

export function getResume(): Resume[] {
  return [
    {
      title: 'Simple',
      href: '../resume/',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Professional',
      href: '../resume#professional',
      description: 'For sighted users to preview content available behind a link.'
    },
    {
      title: 'Modren',
      href: '../resume#modren',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
    },
    {
      title: 'Creative',
      href: '../resume#creative',
      description: 'Visually or semantically separates content.'
    }
  ];
}
