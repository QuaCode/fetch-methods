'use client'

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query'

export const HydrateProvider = (props: HydrateProps) => <RQHydrate {...props} />
