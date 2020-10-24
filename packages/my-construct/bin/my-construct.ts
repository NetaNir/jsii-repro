#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'monocdk';
import { MyConstructStack } from '../lib/my-construct-stack';

const app = new cdk.App();
new MyConstructStack(app, 'MyConstructStack');
