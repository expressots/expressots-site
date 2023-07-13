'use client'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {
  IconBook,
  IconBriefcase,
  IconChevronDown,
  IconExternalLink,
  IconUsersGroup,
  IconBrandGithub,
} from '@tabler/icons-react'
import Link from 'next/link'

export function NavMobile() {
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="group inline-flex w-full justify-center rounded-md border border-neutral-900 bg-neutral-950/90 px-5 py-3 text-sm font-medium text-neutral-8 hover:bg-neutral-900/60 hover:text-base-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-12 focus-visible:ring-opacity-75">
            Menu
            <IconChevronDown
              className={`-mr-1 ml-2 h-5 w-5 text-neutral-5 group-hover:text-base-5`}
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-neutral-900 bg-neutral-950 backdrop-blur-sm focus:outline-none">
            <div className="px-2 py-2 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-base-6 text-neutral-1' : 'text-neutral-8'
                    } group flex w-full items-center rounded-md px-3 py-3 text-base font-medium`}
                  >
                    <Link
                      href="https://doc.expresso-ts.com/docs/hello"
                      className="flex items-center justify-start gap-1"
                    >
                      <IconBook className="mr-2 h-5 w-5" aria-hidden="true" />
                      Documentation
                    </Link>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="https://doc.expresso-ts.com/docs/hello"
                    className={`${
                      active ? 'bg-base-6 text-neutral-1' : 'text-neutral-8'
                    } group flex w-full items-center rounded-md px-3 py-3 text-base font-medium`}
                  >
                    <div className="flex items-center justify-start gap-1">
                      <IconBriefcase className="mr-2 h-5 w-5" aria-hidden="true" />
                      Showcase
                    </div>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="/team"
                    className={`${
                      active ? 'bg-base-6 text-neutral-1' : 'text-neutral-8'
                    } group flex w-full items-center rounded-md px-3 py-3 text-base font-medium`}
                  >
                    <div className="flex items-center justify-start gap-1">
                      <IconUsersGroup className="mr-2 h-5 w-5" aria-hidden="true" />
                      Team
                    </div>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="https://github.com/expressots/expressots"
                    target="_blank"
                    className={`${
                      active ? 'bg-base-6 text-neutral-1' : 'text-neutral-8'
                    } group flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium`}
                  >
                    <div className="flex items-center justify-start gap-1">
                      <IconBrandGithub className="mr-2 h-5 w-5" aria-hidden="true" />
                      Github
                    </div>
                    <IconExternalLink
                      className="mr-2 h-5 w-5 text-neutral-3 group-hover:text-neutral-1 "
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
