/**
 * Copyright 2019 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { proxy } from "comlinkjs";

import PreactService from "./services/preact";

async function bootstrap() {
  const worker: Worker = new Worker(import("./worker.js") as any);

  const { stateService } = proxy(worker);

  // tslint:disable-next-line:no-unused-expression
  new PreactService(stateService);
}

bootstrap();
