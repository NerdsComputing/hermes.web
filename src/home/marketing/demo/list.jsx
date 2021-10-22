import React from 'react'

import { ListWrapper } from 'home/marketing/list/list-wrapper'
import { ListItem } from 'home/marketing/list/list-item'

export const List = () => <ListWrapper>
  <ListItem text={' - https://hermes.api.dev.k8s.nerds.sh/'} link={'https://hermes.api.staging.k8s.nerds.sh/'}
            beginning={'API'} />
  <ListItem text={' - https://hermes.web.dev.k8s.nerds.sh/'} link={'https://hermes.web.staging.k8s.nerds.sh/'}
            beginning={'DASH'} />
  <ListItem text={' - https://hermes.cam.dev.k8s.nerds.sh/'} link={'https://hermes.cam.staging.k8s.nerds.sh/'}
            beginning={'CAM'} />
</ListWrapper>
