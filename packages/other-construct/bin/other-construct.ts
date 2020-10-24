#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'monocdk';
import { OtherConstructStack } from '../lib/other-construct-stack';

const app = new cdk.App();
new OtherConstructStack(app, 'OtherConstructStack');
