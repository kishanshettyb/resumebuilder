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
      href: '/docs/primitives/alert-dialog',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Professional',
      href: '/docs/primitives/hover-card',
      description: 'For sighted users to preview content available behind a link.'
    },
    {
      title: 'Modren',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
    },
    {
      title: 'Creative',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.'
    }
  ];
}

export function getResume(): Resume[] {
  return [
    {
      title: 'Simple',
      href: '/docs/primitives/alert-dialog',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.'
    },
    {
      title: 'Professional',
      href: '/docs/primitives/hover-card',
      description: 'For sighted users to preview content available behind a link.'
    },
    {
      title: 'Modren',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
    },
    {
      title: 'Creative',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.'
    }
  ];
}
