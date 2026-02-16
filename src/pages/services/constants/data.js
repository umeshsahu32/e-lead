export const services = [
  {
    id: 1,
    title: 'Qbot – Dedicated AI Qualification Bot',
    description: 'eLead is our core service — AI-verified leads generated through real conversations, not forms or assumptions.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    whatItIs: {
      title: 'What it is',
      description: 'Each lead is:',
      points: [
        'Engaged by Qbot',
        'Bot is trained on your qualification criteria',
        'Explicitly intent-confirmed',
        'Delivered with proof'
      ]
    },
    bestFor: {
      title: 'Best for',
      points: [
        'Businesses tired of fake or low-intent leads',
        'Sales teams that want clarity before calling',
        'High-value products & services'
      ]
    },
    whatYouReceive: {
      title: 'What you receive',
      points: [
        'Verified lead details',
        'Confirmed requirement & timeline',
        'Full chat transcript',
        'Intent confidence score'
      ]
    },
    tagline: 'Every lead - Verified'
  },
  {
    id: 2,
    title: 'Complete Dashboard & Lead Visibility',
    description: 'Get complete transparency on all leads — qualified and unqualified — with evidence-backed records and clear visibility into your campaign performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    dashboardFeatures: {
      title: 'What You See Inside Your eLead Dashboard',
      qualified: {
        title: '✔ Qualified eLeads',
        points: [
          'All verified leads delivered to your account',
          'Full conversation transcripts',
          'Confirmed intent & qualification details',
          'Lead status and delivery timestamps'
        ]
      },
      unqualified: {
        title: '✖ Unqualified Leads',
        points: [
          'Leads that were engaged but did not qualify',
          'Clear reason for disqualification (budget, location, intent, etc.)',
          'Complete transparency on filtering logic'
        ]
      },
      note: 'You see what was rejected and why.'
    },
    evidenceBacked: {
      title: 'Evidence-Backed Lead Records',
      description: 'Every lead in your dashboard is supported by:',
      points: [
        'Chat transcripts',
        'Timestamp',
        'Qualification responses',
        'Qbot confidence score'
      ],
      ensures: [
        'No disputes',
        'No ambiguity',
        'No "trust us" conversations'
      ]
    },
    designedFor: {
      title: 'Designed for Sales & Decision Makers',
      description: 'The eLead dashboard helps:',
      points: [
        'Sales teams call only verified prospects',
        'Managers track campaign effectiveness',
        'Founders and marketers measure ROI clearly'
      ],
      tagline: 'No spreadsheets. No black boxes. Just clear, usable data.'
    }
  },
  {
    id: 3,
    title: 'Industry-Specific AI Lead Campaigns',
    description: 'Precision Campaigns Built on AI, Martech & Intent Intelligence. At eLead, lead generation is not a generic activity. Every campaign is industry-specific, AI-driven, and MarTech-integrated, designed to generate high-intent leads through intelligent automation, not mass advertising.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tagline: 'Our campaigns are built for businesses that care about who converts, not just who clicks.',
    subsections: [
      {
        title: 'Martech-Compatible, AI-Powered Campaign Architecture',
        description: 'eLead campaigns are designed to seamlessly integrate with modern marketing automation ecosystems, including platforms such as Adobe Marketo, Oracle Cloud, and Bitrix24 Cloud.',
        whatItMeans: {
          title: 'What this means for you:',
          points: [
            'Campaign data is structured, trackable, and automation-ready',
            'Leads flow cleanly into sales systems',
            'Campaign performance is measurable at every stage',
            'AI qualification logic works alongside enterprise Martech stacks'
          ]
        },
        note: 'While we ensure full compatibility with enterprise Martech tools, the campaigns themselves are executed through eLead\'s proprietary, home-grown campaign infrastructure — giving us flexibility, speed, and control.'
      },
      {
        title: 'Home-Grown Landing Infrastructure (Martech-Ready)',
        description: 'All eLead campaigns run on our own AI-optimized landing pages, purpose-built to work with modern Martech platforms.',
        advantages: {
          title: 'Key advantages:',
          points: [
            'Faster deployment than client-side pages',
            'Optimized for AI conversations, not static forms',
            'Fully compatible with tracking, tagging, and automation tools',
            'Clean separation between traffic, qualification, and delivery'
          ]
        },
        tagline: 'We don\'t depend on cookie-heavy, form-based landing pages. We build conversation-first AI entry points.'
      },
      {
        title: 'Brand-Customized Creatives & Campaign Logic',
        description: 'While the infrastructure is standardized for performance, every campaign is brand-customized.',
        customization: {
          title: 'Customisation includes:',
          points: [
            'Brand-aligned messaging and tonality',
            'Industry-specific value propositions',
            'Client-approved positioning and disclaimers',
            'Campaign creatives tailored to the target audience'
          ]
        },
        ensures: {
          title: 'This ensures:',
          points: [
            'The prospect experiences your brand, not a generic funnel',
            'Messaging remains compliant and accurate',
            'AI conversations stay within approved boundaries'
          ]
        },
        note: 'eLead handles the strategy, AI logic, and execution — without diluting your brand identity.'
      },
      {
        title: 'Inorganic Lead Generation Sources (AI-Driven)',
        description: 'eLead leverages multiple inorganic traffic sources, but with a fundamental difference: Traffic is only the entry point. AI qualification determines what becomes a lead.',
        trafficSources: {
          title: 'Traffic Sources We Use:',
          points: [
            'Paid search campaigns',
            'Social media advertising',
            'Display and retargeting networks',
            'Native and discovery platforms',
            'Programmatic traffic sources',
            'Email-led outreach funnels (where applicable)'
          ]
        },
        tagline: 'Every inbound interaction is immediately routed to Qbot, where AI takes over. eLead combines AI, Martech compatibility, and industry intelligence to turn inorganic traffic into verified buyer intent — at scale.'
      }
    ]
  }
]