/* 
 * This program is an unpublished work fully protected by the United States
 * copyright laws and is considered a trade secret belonging to Attala Systems Corporation.
 * To the extent that this work may be considered "published", the following notice applies
 * "(C) 2020, 2021, Attala Systems Corporation"
 *
 * Any unauthorized use, reproduction, distribution, display, modification,
 * or disclosure of this program is strictly prohibited.
 *
 *
 * Copyright 2018-2022 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LabIcon } from '@jupyterlab/ui-components';

import clearPipelineSvg from '../style/icons/clear-pipeline.svg';
import elyraSvg from '../style/icons/codait-piebrainlogo-jupyter-color.svg';
import codeSnippetSvg from '../style/icons/code-snippet.svg';
import containerSvg from '../style/icons/container.svg';
import dragDropSvg from '../style/icons/dragdrop.svg';
import errorIconSvg from '../style/icons/error.svg';
import exportPipelineSvg from '../style/icons/export-pipeline.svg';
import helpIconSvg from '../style/icons/help.svg';
import importSvg from '../style/icons/import.svg';
import pipelineComponentSvg from '../style/icons/pipeline-components.svg';
import pipelineSvg from '../style/icons/pipeline-flow.svg';
import pyIconSvg from '../style/icons/py-logo.svg';
import rIconSvg from '../style/icons/r-logo.svg';
import runtimesSvg from '../style/icons/runtimes.svg';
import savePipelineSvg from '../style/icons/save-pipeline.svg';
import scalaIconSvg from '../style/icons/scala-logo.svg';
import tagIconSvg from '../style/icons/tag.svg';
import templateSvg from '../style/icons/template.svg';
import trashIconSvg from '../style/icons/trashIcon.svg';
import viewOffIconSvg from '../style/icons/view--off.svg';
import viewIconSvg from '../style/icons/view.svg';
import whatsNewSvg from '../style/icons/whats-new.svg';

export const importIcon = new LabIcon({
  name: 'elyra:import',
  svgstr: importSvg
});
export const codeSnippetIcon = new LabIcon({
  name: 'elyra:code-snippet',
  svgstr: codeSnippetSvg
});
export const templateIcon = new LabIcon({
  name: 'elyra:template',
  svgstr: templateSvg
});
export const dragDropIcon = new LabIcon({
  name: 'elyra:dragdrop',
  svgstr: dragDropSvg
});
export const elyraIcon = new LabIcon({ name: 'elyra:elyra', svgstr: elyraSvg });
export const pipelineIcon = new LabIcon({
  name: 'elyra:pipeline',
  svgstr: pipelineSvg
});
export const componentCatalogIcon = new LabIcon({
  name: 'elyra:pipeline-components',
  svgstr: pipelineComponentSvg
});
export const errorIcon = new LabIcon({
  name: 'elyra:errorIcon',
  svgstr: errorIconSvg
});
export const clearPipelineIcon = new LabIcon({
  name: 'elyra:clear-pipeline',
  svgstr: clearPipelineSvg
});
export const exportPipelineIcon = new LabIcon({
  name: 'elyra:export-pipeline',
  svgstr: exportPipelineSvg
});
export const savePipelineIcon = new LabIcon({
  name: 'elyra:save-pipeline',
  svgstr: savePipelineSvg
});
export const runtimesIcon = new LabIcon({
  name: 'elyra:runtimes',
  svgstr: runtimesSvg
});
export const containerIcon = new LabIcon({
  name: 'elyra:container',
  svgstr: containerSvg
});
export const trashIcon = new LabIcon({
  name: 'elyra:trashIcon',
  svgstr: trashIconSvg
});
export const helpIcon = new LabIcon({
  name: 'elyra:helpIcon',
  svgstr: helpIconSvg
});
export const tagIcon = new LabIcon({
  name: 'elyra:tagIcon',
  svgstr: tagIconSvg
});
export const rIcon = new LabIcon({
  name: 'elyra:rIcon',
  svgstr: rIconSvg
});
export const pyIcon = new LabIcon({
  name: 'elyra:pyIcon',
  svgstr: pyIconSvg
});
export const scalaIcon = new LabIcon({
  name: 'elyra:scalaIcon',
  svgstr: scalaIconSvg
});
export const viewIcon = new LabIcon({
  name: 'elyra:view',
  svgstr: viewIconSvg
});
export const viewOffIcon = new LabIcon({
  name: 'elyra:viewOff',
  svgstr: viewOffIconSvg
});
export const whatsNewIcon = new LabIcon({
  name: 'elyra:whats-new',
  svgstr: whatsNewSvg
});

/**
 * A utilities class for handling LabIcons.
 */
export class IconUtil {
  static encode(icon: LabIcon): string {
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(icon.svgstr);
  }

  private static colorizedIcons: { [key: string]: LabIcon } = {};

  static colorize(
    icon: LabIcon,
    fillColor?: string,
    strokeColor?: string
  ): LabIcon {
    const iconName = `${icon.name}${fillColor ? ':' + fillColor : ''}${
      strokeColor ? ':' + strokeColor : ''
    }`;

    if (this.colorizedIcons[iconName]) {
      return this.colorizedIcons[iconName];
    }

    let svgstr = icon.svgstr;

    if (fillColor) {
      svgstr = svgstr.replace(
        /fill="(?:(?!none).)+?"/gi,
        `fill="${fillColor}"`
      );
    }
    if (strokeColor) {
      svgstr = svgstr.replace(
        /stroke="(?:(?!none).)+?"/gi,
        `stroke="${strokeColor}"`
      );
    }

    const coloredIcon = LabIcon.resolve({
      icon: {
        name: iconName,
        svgstr: svgstr
      }
    });

    this.colorizedIcons[iconName] = coloredIcon;

    return coloredIcon;
  }
}
